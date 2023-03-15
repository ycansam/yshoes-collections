import Logic from "./logic.logic";
import CUser from "../classes/users.class";
import User from "../interfaces/users.interface";
import UsersModel from "../models/users.model";
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const TIME_TO_EXPIRE = 86400;

class UsersLogics extends Logic {

    public getById = async (id_user: string): Promise<User> => {
        const userDoc: User = await UsersModel.findById(id_user).populate('cart.id_product', 'name price image currency');
        if (userDoc)
            return userDoc
        return null
    }

    public create = this.createAny

    public update = this.updateAny

    public delete = this.deleteAnyById

    public login = async ({ username, password }) => {
        const token = this.Authenticate(username, password);
        return token;
    }

    private Authenticate = async (username: string, password: string) => {
        // find the user by email
        const user: User = await UsersModel.findOne({ username });

        // if no user is found, return an error
        if (!user) {
            throw new Error('Invalid email or password');
        }

        // compare the hashed password with the plaintext password provided
        const isMatch = await bcrypt.compare(password, user.password);

        // if the passwords don't match, return an error
        if (!isMatch) {
            throw new Error('Invalid email or password');
        }
        const token = jwt.sign({ id: user._id, username: user.username, role: user.role }, process.env.SECRET_JWT, { expiresIn: 86000 });
        
        return token;
    }





}

const usersLogic: UsersLogics = new UsersLogics(UsersModel, CUser, "user");
export default usersLogic;