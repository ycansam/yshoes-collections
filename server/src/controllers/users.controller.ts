import { Response, Request, NextFunction } from "express";
import usersLogic from "../logics/users.logic";
import CUser from "../classes/users.class";

const MESSAGES = {
    GET: "User obtained",
    CREATED: "User created",
    UPDATED: "User updated",
    DELETED: "User deleted",
}

class UsersController {

    public getById = async (req: Request, res: Response, next: NextFunction) => {

        const { id } = req.params;

        const result = usersLogic.getById(id);

        result.then(users => {
            return res.status(200).json(users);
        }).catch(err => {
            console.log(err.message);
            next(err);
        })
    }

    public create = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

        const user = new CUser(req.body);
        const userCreated = usersLogic.create(user);

        userCreated.then(user => {
            return res.status(200).json({ content: user, message: MESSAGES.CREATED });
        }).catch(err => {
            console.log(err.message);
            next(err);
        })

    }

    public update = async (req: Request, res: Response, next: NextFunction) => {
        const user = new CUser(req.body);
        const { id } = req.params;

        const userUpdated = usersLogic.update(id, user);

        userUpdated.then((user) => {
            return res.status(200).json({ content: user, message: MESSAGES.UPDATED });
        }).catch(err => {
            console.log(err.message);
            next(err);
        })
    }

    public delete = async (req: Request, res: Response, next: NextFunction) => {

        const { id } = req.params;
        const userDeleted = usersLogic.delete(id);

        userDeleted.then((user) => {
            return res.status(200).json({ content: user, message: MESSAGES.DELETED });
        }).catch(err => {
            console.log(err.message);
            next(err);
        })
    }

}

const usersController: UsersController = new UsersController();
export default usersController;