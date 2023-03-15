import Logic from "./logic.logic";
import CProduct from "../classes/products.class";
import CartProduct from "../models/interfaces/cart-product.interface";
import ProductsModel from "../models/products.model";
import Product from "../models/interfaces/product.interface";
class ProductsLogic extends Logic {

    public getById = this.getByIdAny

    public create = this.createAny

    public update = this.updateAny

    public delete = this.deleteAnyById

    public getStockQuantity = async (id_product: string, color: string, size: string): Promise<number> => {
        return new Promise(async (resolve, reject) => {
            try {
                const doc = await this.model.findOne(
                    { _id: id_product, colors: { $elemMatch: { name: color, sizes: { $elemMatch: { name: size } } } } },
                    { select: 'colors.$.sizes.$[size].units' }
                )
                console.log(doc);
                resolve(doc.units);
            } catch (err) {
                reject(err);
            }

        })
    }

    public substractStocksFromCartCheckout = async (cart: CartProduct[]): Promise<boolean> => {

        return new Promise(async (resolve, reject) => {
            try {
                const stockUpdate = cart.map(async cartProduct => {
                    let product: Product = await this.model.findById(cartProduct.id_product._id) as unknown as Product;
                    if (!product) reject(new Error('Product in cart was not found')); // skipea este elemento
                    const colorIndex = this.findIndexOfProductColor(product, cartProduct);
                    if (!this.existsIndex(colorIndex)) reject(new Error('Color does not found'))

                    const sizeIndex = this.findIndexOfProductSize(product, cartProduct, colorIndex);
                    if (!this.existsIndex(sizeIndex)) reject(new Error('Size was not found'))

                    const units = product.colors[colorIndex].sizes[sizeIndex].units -= cartProduct.quantity;
                    if (units <= 0) reject(new Error('There is no stock available for this product'))
                    const updated = await this.model.findByIdAndUpdate(cartProduct.id_product._id, product);
                    if (!updated) reject(new Error('Product was not updated'))
                })
                const doc = await Promise.all(stockUpdate);
                if (doc) resolve(true)
                reject(new Error("Products were not updated "));
            } catch (err) {
                reject(err)
            }
        })
    }


    public checkProductExist = async (id_product: string): Promise<boolean> => {
        const product = await ProductsModel.findById(id_product);
        return product !== null;
    }

    private findIndexOfProductColor = (product: Product, otherProduct: CartProduct): number => {
        return product.colors.findIndex((color) =>

            color.name == otherProduct.color
        )
    }

    private findIndexOfProductSize = (product: Product, otherProduct: CartProduct, colorIndex: number): number => {
        return product.colors[colorIndex].sizes.findIndex((size) => size.name === otherProduct.size)
    }

    private existsIndex = (index: number): boolean => {
        return index != -1
    }

}

const productsLogic: ProductsLogic = new ProductsLogic(ProductsModel, CProduct, "product");
export default productsLogic;