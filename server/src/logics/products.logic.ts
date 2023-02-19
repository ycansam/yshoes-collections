import Logic from "./logic.logic";
import CProduct from "../classes/products.class";
const ProductsModel = require("../models/products.model");
class ProductsLogic extends Logic {

    public getById = this.getByIdAny

    public create = this.createAny

    public update = this.updateAny

    public delete = this.deleteAnyById
}

const productsLogic: ProductsLogic = new ProductsLogic(ProductsModel, CProduct, "product");
export default productsLogic;