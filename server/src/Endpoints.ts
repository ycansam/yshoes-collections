export default class Endpoints {
    static readonly version = "/v1";
    static readonly DEFAULT_PATH = this.version + "/yshoes";

    static readonly USERS = {
        DEFAULT_PATH: this.DEFAULT_PATH + "/users",
        GET_BY_ID: "/:id",
        CREATE: "/",
        UPDATE: "/:id",
        DELETE: "/:id",
    };

    static readonly CART = {
        DEFAULT_PATH: this.DEFAULT_PATH + "/cart",
        GET_USER_CART: "/:id_user",
        UPDATE_USER_CART: "/:id_user",
        CLEAR_USER_CART: "/:id_user",
        ADD_PRODUCT: "/:id_user",
        REMOVE_PRODUCT: ":id_user"
    };

    static readonly PRODUCTS = {
        DEFAULT_PATH: this.DEFAULT_PATH + "/products",
        GET: "/",
        GET_ONE: "/:id",
        CREATE: "/",
        UPDATE: "/:id",
        DELETE: "/:id",
    };

    static readonly COLLECTIONS = {
        DEFAULT_PATH: this.DEFAULT_PATH + "/collections",
        GET: "/",
        GET_ONE: "/:id",
        CREATE: "/",
        UPDATE: "/:id",
        DELETE: "/:id",
    };


}