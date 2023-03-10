import { Response, Request, NextFunction } from "express";
import usersLogic from "../logics/users.logic";
import CUser from "../classes/users.class";
import Controller from "./controller.controller";

class UsersController extends Controller {

    public getById = this.getByIdAny

    public create = this.createAny

    public update = this.updateAny

    public delete = this.deleteAny

    public login = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

        try {
            const { username, password } = req.body;

            const token = usersLogic.login({ username, password });

            token.then((token: any) => {
                return res.status(200).json({ content: { token }, message: "User logged" });
            }).catch((err: Error) => {
                next(err);
            })
        } catch (err) {
            next(err);
        }
    }

}

const usersController: UsersController = new UsersController(usersLogic, CUser, "user");
export default usersController;