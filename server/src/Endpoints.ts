export default class Endpoints {
    static readonly version = "/v1";
    static readonly DEFAULT_PATH = this.version + "/yshoes";
    static readonly USERS = {
        DEFAULT_PATH: this.DEFAULT_PATH + "/users",
        GET: "/",
        GET_ONE: "/:id",
        CREATE: "/",
        UPDATE: "/:id",
        DELETE: "/:id",
    };
}