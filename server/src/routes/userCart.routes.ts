import Endpoints from "../Endpoints";
import AppRouter from "../router";
import usersController from "../controllers/users.controller";
import usersCartController from "../controllers/userCart.controller";

class UsersRouter extends AppRouter {
    constructor() {
        super();
        this.addProduct();
    }

    private addProduct = () => this.router.post(Endpoints.CART.ADD_PRODUCT, usersCartController.addProduct)

}

const restUserRouter: UsersRouter = new UsersRouter();
export default restUserRouter.router