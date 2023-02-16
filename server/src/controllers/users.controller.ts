import { Response, Request, NextFunction } from "express";
import usersLogic from "../logics/users.logic";
import Controller from "./controller.interface";

class UsersController implements Controller {

    public getOne = async (req: Request, res: Response, next: NextFunction) => {

        const result = usersLogic.getOne();

        result.then(users => {
            return res.status(200).json(users);
        }).catch(err => {
            console.log(err);
            next(err);
        })
    }

}

const usersController: UsersController = new UsersController();
export default usersController;