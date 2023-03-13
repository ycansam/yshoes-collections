import Endpoints from "../Endpoints";
import checkoutsController from "../controllers/checkouts.controller";
import AppRouter from "../router";

class CheckoutsRoutes extends AppRouter {
    constructor() {
        super();
        this.addCheckout();
    }
    private addCheckout = () => this.router.post(Endpoints.CHECKOUT.ADD_CHECKOUT, checkoutsController.addCheckout)

}

const checkoutsRoutes: CheckoutsRoutes = new CheckoutsRoutes();
export default checkoutsRoutes.router