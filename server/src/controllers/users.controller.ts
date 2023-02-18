import { Response, Request, NextFunction } from "express";
import usersLogic from "../logics/users.logic";

class UsersController {

    public get = async (req: Request, res: Response, next: NextFunction) => {

        const result = usersLogic.getOne();

        result.then(users => {
            return res.status(200).json(users);
        }).catch(err => {
            console.log(err);
            next(err);
        })
    }

    public create = async (req: Request, res: Response, next: NextFunction) => {

    }
    public update = async (req: Request, res: Response, next: NextFunction) => {

    }
    public delete = async (req: Request, res: Response, next: NextFunction) => {

    }

}

const usersController: UsersController = new UsersController();
export default usersController;