import Endpoints from "../Endpoints";
import AppRouter from "../router";
import usersController from "../controllers/users.controller";
import usersCartController from "../controllers/userCart.controller";

class UsersRouter extends AppRouter {
    constructor() {
        super();
        this.addProduct();
        this.removeProduct();
    }

    private addProduct = () => this.router.post(Endpoints.CART.ADD_PRODUCT, usersCartController.addProduct)
    private removeProduct = () => this.router.post(Endpoints.CART.REMOVE_PRODUCT, usersCartController.removeProduct)

}

const restUserRouter: UsersRouter = new UsersRouter();
export default restUserRouter.router