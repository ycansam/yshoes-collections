import Logic from "./logic.logic";
import CProduct from "../classes/products.class";
import CartProduct from "../models/interfaces/cart-product.interface";
import ICartProduct from "../interfaces/cartProduct.interface";
import Product from "../models/interfaces/product.interface";

const ProductsModel = require("../models/products.model");
class ProductsLogic extends Logic {

    public getById = this.getByIdAny

    public create = this.createAny

    public update = this.updateAny

    public delete = this.deleteAnyById

    public substractStocksFromCartCheckout = async (cart: CartProduct[]): Promise<boolean> => {

        return new Promise(async (resolve, reject) => {
            try {

                const stockUpdate = cart.map(async productCart => {
                    let product: Product = await this.model.findById(productCart.id_product._id) as unknown as Product;
                    if (!product) reject(new Error('Product in cart was not found')); // skipea este elemento
                    const colorIndex = this.findIndexOfProductColor(product, productCart);
                    if (!this.existsIndex(colorIndex)) reject(new Error('Color was not found'))

                    const sizeIndex = this.findIndexOfProductSize(product, productCart, colorIndex);
                    if (!this.existsIndex(sizeIndex)) reject(new Error('Size was not found'))

                    const units = product.colors[colorIndex].sizes[sizeIndex].units -= productCart.quantity;
                    if(units <= 0) reject(new Error('There is no stock available for this product'))
                    const updated = await this.model.findByIdAndUpdate(productCart.id_product._id, product);
                    if (!updated) reject(new Error('Product was not updated'))
                }
                )
                const doc = await Promise.all(stockUpdate);
                if (doc) resolve(true)
                reject(new Error("Products were not updated "));
            } catch (err) {
                reject(err)
            }
        })
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