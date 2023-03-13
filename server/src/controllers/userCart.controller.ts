
import { Response, Request, NextFunction } from "express";
import userCartLogic from "../logics/userCart.logic";
import ICartProduct from "../interfaces/cartProduct.interface";
class UserCartController {

    public addProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id_user } = req.params;
            const { id_product, size, color, quantity }: ICartProduct = req.body;

            const productAdded = userCartLogic.addProduct(id_user, { id_product, size, color, quantity });

            productAdded.then((item: any) => {
                if (item)
                    return res.status(200).json({ content: item, message: "product added" });
                return res.status(404).json({ message: "product not found" });
            }).catch((err: Error) => {
                console.log(err.message);
                next(err);
            })
        } catch (err) {
            next(err);
        }

    }

    public removeProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id_user } = req.params;
            const { id_in_cart } = req.body;

            const productRemoved = userCartLogic.removeProduct(id_user, id_in_cart);

            productRemoved.then((item: any) => {
                return res.status(200).json({ content: item, message: "product removed" });
            }).catch((err: Error) => {
                console.log(err.message);
                next(err);
            })
        } catch (err) {
            next(err);
        }

    }

}

const usersCartController: UserCartController = new UserCartController();
export default usersCartController;