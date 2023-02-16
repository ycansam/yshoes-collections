import { Application } from "express";
import Endpoints from "../Endpoints";
import AppRouter from "../router";

class UsersRouter extends AppRouter {
    constructor() {
        super();
        this.getUser();
    }

    public getUser = () => this.router.get(Endpoints.USERS.GET, async (req, res) => {
        console.log("a");
        return res.status(200).json({message: "HOLA"});
    })

}

const restUserRouter: UsersRouter = new UsersRouter();
export default restUserRouter.router