

interface IUser {
    username: String;
    name: String,
    surnames: String,
    email: String,
    password: String,
    jwt_access: String,
    cart: Array<any>
}

export default IUser;