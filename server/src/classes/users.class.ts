export default class CUser {

    public username: string;
    public name: string;
    public surnames: string;
    public email: string;
    public password: string;
    public jwt_access: string;
    public cart: Array<any>;

    constructor({ username, name, surnames, email, password, jwt_access, cart }) {
        this.username = username;
        this.name = name;
        this.surnames = surnames;
        this.email = email;
        this.password = password;
        this.jwt_access = jwt_access;
        this.cart = cart;
    }

}