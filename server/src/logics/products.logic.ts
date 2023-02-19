import Logic from "./logic.logic";
import CProduct from "../classes/products.class";
import productsModel from "../models/products.model";
class ProductsLogic extends Logic {

    public getById = this.getByIdAny

    public create = this.createAny

    public update = this.updateAny

    public delete = this.deleteAnyById
}

const productsLogic: ProductsLogic = new ProductsLogic(productsModel, CProduct, "product");
export default productsLogic;