import { NextFunction, Request, Response } from "express";
import checkoutsLogic from "../logics/checkouts.logic";

class CheckoutsController {
    public addCheckout = (req: Request, res: Response, next: NextFunction) => {
        const { id, amount, currency } = req.body;
        const response = checkoutsLogic.addCheckout({ id, amount, currency });
        response.then(() => {
            return res.status(200).json({ content: "", message: "paid confirmed" });
        }).catch((err: Error) => {
            console.log(err.message);
            next(err);
        })

    }
}

const checkoutsController: CheckoutsController = new CheckoutsController();
export default checkoutsController;