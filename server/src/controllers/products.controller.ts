import CProduct from "../classes/products.class";
import Controller from "./controller.controller";
import productsLogic from "../logics/products.logic";

class ProductsController extends Controller {

    public getById = this.getByIdAny

    public create = this.createAny

    public update = this.updateAny

    public delete = this.deleteAny

}

const productsController: ProductsController = new ProductsController(productsLogic, CProduct, "product");
export default productsController;