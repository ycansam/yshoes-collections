import Endpoints from "../Endpoints";
import AppRouter from "../router";
import usersController from "../controllers/users.controller";

class UsersRouter extends AppRouter {
    constructor() {
        super();
        this.getById();
        this.create();
        this.update();
        this.delate();
    }

    private getById = () => this.router.get(Endpoints.USERS.GET_BY_ID, usersController.getById)

    private create = () => this.router.post(Endpoints.USERS.CREATE, usersController.create);

    private update = () => this.router.put(Endpoints.USERS.UPDATE, usersController.update);

    private delate = () => this.router.delete(Endpoints.USERS.DELETE, usersController.delete);

}

const restUserRouter: UsersRouter = new UsersRouter();
export default restUserRouter.router