
import { AnyKeys, Model } from "mongoose";
import ICartProduct from "../interfaces/cartProduct.interface";
import IUser from "../interfaces/users.interface";
const UsersModel = require('../models/users.model')
const ProductsModel = require('../models/products.model')
class UserCartLogic {

    private checkProductExist = async (id_product: string): Promise<void> => {
        const product = await ProductsModel.findById(id_product);
        if (!product)
            throw new Error("product doest not exist");
    }

    private updateOrAddProductOnCart = async (userDoc: IUser, { id_product, quantity, color, size }: ICartProduct): Promise<IUser> => {
        let product: ICartProduct = userDoc.cart.find((product: ICartProduct) => {
            return product.id_product == id_product && product.color == color && product.size == size;
        })
        // Si el producto con caracteristicas iguales esta en la lista añade mas cantidad, si no lo crea
        if (product) {
            product.quantity = product.quantity + 1;
        } else {
            userDoc.cart.push({ id_product, quantity, color, size })
        }
        userDoc.save();
        return userDoc;
    }

    private findUserDoc = async (id_user: string): Promise<IUser> => {
        const userDoc: IUser = await UsersModel.findById(id_user);
        if (userDoc)
            return userDoc
        throw new Error("User doest not exist")
    }


    public addProduct = async (id_user: string, { id_product, quantity, color, size }: ICartProduct): Promise<boolean> => {
        return new Promise(async (resolve, reject) => {
            try {
                // Comprueba primero que el producto exista
                this.checkProductExist(id_product);

                // busca el user
                const userDoc: IUser = await this.findUserDoc(id_user);

                // busca el producto en el carro
                const userDocUpdated: IUser = await this.updateOrAddProductOnCart(userDoc, { id_product, quantity, color, size });

                console.log(userDocUpdated);
                userDoc ? resolve(true) : reject(new Error("Product wasn't added"));
            } catch (err) {
                reject(err)
            }
        })

    }

}

const userCartLogic: UserCartLogic = new UserCartLogic();
export default userCartLogic;