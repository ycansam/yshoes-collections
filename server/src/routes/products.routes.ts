import Endpoints from "../Endpoints";
import AppRouter from "../router";
import productsController from "../controllers/products.controller";
class ProductsRouter extends AppRouter {
    constructor() {
        super();
        this.getById();
        this.create();
        this.update();
        this.delate();
    }

    private getById = () => this.router.get(Endpoints.PRODUCTS.GET_ONE, productsController.getById)

    private create = () => this.router.post(Endpoints.PRODUCTS.CREATE, productsController.create);

    private update = () => this.router.put(Endpoints.PRODUCTS.UPDATE, productsController.update);

    private delate = () => this.router.delete(Endpoints.PRODUCTS.DELETE, productsController.delete);

}

const productsRouter: ProductsRouter = new ProductsRouter();
export default productsRouter.router;