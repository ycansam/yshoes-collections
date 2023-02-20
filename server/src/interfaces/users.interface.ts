

interface IUser {
    _id?: string | any;
    username: String;
    name: String,
    surnames: String,
    email: String,
    role: String,
    password: String,
    jwt_access: String,
    cart: Array<any>,
    save: () => {}
}

export default IUser;