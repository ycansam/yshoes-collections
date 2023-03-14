
import ICartProduct from "../interfaces/cartProduct.interface";
import User from "../interfaces/users.interface";
import CartProduct from "../models/interfaces/cart-product.interface";
const UsersModel = require('../models/users.model')
const ProductsModel = require('../models/products.model')
abstract class Response {
    constructor(protected message: string, protected status: boolean) {

    }

    public getMessage(): string {
        return this.message;
    }

    public getStatus(): boolean {
        return this.status;
    }
}

class NotProductFoundResponse extends Response {
    constructor() {
        super("Not Product Found", false);
    }
}

class ProductAddedToCartResponse extends Response {
    constructor() {
        super("Product Added to Cart", true);
    }
}
class NotUserFoundResponse extends Response {
    constructor() {
        super("Not User Found", false);
    }
}


class UserCartLogic {

    public getByUser = (id_user: string): Promise<CartProduct[]> => {

        return new Promise(async (resolve, reject) => {
            const userDoc: User = await this.findUserDoc(id_user);
            if (!userDoc) reject(new NotUserFoundResponse());



            resolve(userDoc.cart);
        })
    }

    public addProduct = async (id_user: string, { id_product, quantity, color, size }: ICartProduct): Promise<Response> => {
        return new Promise(async (resolve, reject) => {

            const isProductFound = await this.checkProductExist(id_product);
            if (!isProductFound) reject(new NotProductFoundResponse());

            const userDoc: User = await this.findUserDoc(id_user);
            if (!userDoc) reject(new NotUserFoundResponse());

            const userDocUpdated: User = await this.updateOrAddProductOnCart(userDoc, { id_product, quantity, color, size });
            userDocUpdated.save();
            if (userDocUpdated)
                userDocUpdated ? resolve(new ProductAddedToCartResponse()) : reject("Product wasn't added");

        })
    }


    public removeProduct = async (id_user: string, id_in_cart: string) => {
        return new Promise(async (resolve, reject) => {
            try {

                // busca el user
                let userDoc: User = await this.findUserDoc(id_user);

                // busca el producto en el carrito
                const cart = this.removeProductFromCart(userDoc.cart, id_in_cart);

                userDoc.cart = cart;
                const userUpdated = userDoc.save();

                userUpdated ? resolve(true) : reject(new Error("Product wasn't added"));
            } catch (err) {
                reject(err)
            }
        })
    }



    private checkProductExist = async (id_product: string): Promise<boolean> => {
        const product = await ProductsModel.findById(id_product);
        return product !== null;
    }

    private findUserDoc = async (id_user: string): Promise<User> => {
        const userDoc: User = await UsersModel.findById(id_user).populate('cart.id_product', 'name price image currency');
        if (userDoc)
            return userDoc
        return null
    }

    private updateOrAddProductOnCart = (userDoc: User, { id_product, quantity, color, size }: ICartProduct): User => {
        let productFoundOncart = this.findEqualProductOnUserCart(userDoc, { id_product, quantity, color, size })
        if (productFoundOncart) this.addOneProductQuantity(productFoundOncart);
        else this.pushNewProductToCart(userDoc, { id_product, quantity, color, size })
        return userDoc;
    }

    private findEqualProductOnUserCart = (userDoc: User, { id_product, quantity, color, size }) => {
        return userDoc.cart.find((product: CartProduct) => {
            return product.id_product._id == id_product && product.color == color && product.size == size;
        })
    }

    private addOneProductQuantity = (product: CartProduct) => {
        product.quantity = product.quantity + 1;
    }
    private pushNewProductToCart = (userDoc: User, { id_product, quantity, color, size }) => {
        userDoc.cart.push({ id_product, quantity, color, size })
    }

    private removeProductFromCart = (cart: Array<ICartProduct>, id_in_cart: string): Array<ICartProduct> => {
        //  == por que compara Object id con string
        const index = cart.findIndex(item => item._id == id_in_cart);
        if (index !== -1) {
            cart.splice(index, 1)
            return cart;
        }
        throw new Error("Selected product does not exist on cart");
    }

}

const userCartLogic: UserCartLogic = new UserCartLogic();
export default userCartLogic;