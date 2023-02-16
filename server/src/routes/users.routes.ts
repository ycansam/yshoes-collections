import { Application } from "express";
import Endpoints from "../Endpoints";
import AppRouter from "../router";
import usersController from "../controllers/users.controller";
class UsersRouter extends AppRouter {
    constructor() {
        super();
        this.getOne();
    }

    private getOne = () => this.router.get(Endpoints.USERS.GET, usersController.getOne)

}

const restUserRouter: UsersRouter = new UsersRouter();
export default restUserRouter.router