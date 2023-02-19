
import { Response, Request, NextFunction } from "express";
import userCartLogic from "../logics/userCart.logic";
class UserCartController {
    private logic: any;

    constructor(logic: any) {
        this.logic = logic;
    }

    public addProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id_user } = req.params;
            const { id_product } = req.body;

            const productAdded = this.logic.addProduct(id_user, id_product);

            productAdded.then((item: any) => {
                return res.status(200).json({ content: item, message: "product added" });
            }).catch((err: Error) => {
                console.log(err.message);
                next(err);
            })
        } catch (err) {
            next(err);
        }

    }

}

const usersCartController: UserCartController = new UserCartController(userCartLogic);
export default usersCartController;