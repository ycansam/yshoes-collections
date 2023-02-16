export default class Endpoints {
    static readonly version = "/v1";
    static readonly DEFAULT_PATH = this.version + "/";
    static readonly USERS = {
        GET: "/users",
        GET_ONE: "/users/:id",
        CREATE: "/users",
        UPDATE: "/users/:id",
        DELETE: "/users/:id",
    };
}