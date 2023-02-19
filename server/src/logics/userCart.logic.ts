
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

    private updateOrAddProductOnCart = async (userDoc, id_product: string) => {
        let product: ICartProduct = userDoc.cart.find((product: ICartProduct) => {
            return product.id_product == id_product;
        })
        if (product) {
            product.quantity = product.quantity + 1;
        } else {
            userDoc.cart.push({ id_product })
        }
        userDoc.save();
        return userDoc;
    }

    private findUserDoc = async (id_user: string): Promise<IUser> => {
        const userDoc: IUser = await UsersModel.findById(id_user);
        if (userDoc)
            return userDoc
        throw new Error("user doest not exist")
    }


    public addProduct = async (id_user: string, id_product: string): Promise<boolean> => {
        return new Promise(async (resolve, reject) => {
            try {
                // Comprueba primero que el producto exista
                this.checkProductExist(id_product);

                // busca el user
                const userDoc: IUser = await this.findUserDoc(id_user);

                // busca el producto en el carro
                const userDocUpdated: IUser = await this.updateOrAddProductOnCart(userDoc, id_product);



                console.log(userDoc);
                userDoc ? resolve(true) : reject(new Error(" does not exist"));
            } catch (err) {
                reject(err)
            }
        })

    }

}

const userCartLogic: UserCartLogic = new UserCartLogic();
export default userCartLogic;