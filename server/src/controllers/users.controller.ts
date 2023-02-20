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

            const itemCreated = usersLogic.login({ username, password });

            itemCreated.then((item: any) => {
                return res.status(200).json({ content: item, message: "User logged" });
            }).catch((err: Error) => {
                console.log(err.message);
                next(err);
            })
        } catch (err) {
            next(err);
        }
    }

}

const usersController: UsersController = new UsersController(usersLogic, CUser, "user");
export default usersController;