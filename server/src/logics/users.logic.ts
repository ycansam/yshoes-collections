import Logic from "./logic.logic";
import CUser from "../classes/users.class";
const usersModel = require('../models/users.model')
const bcrypt = require('bcrypt');
class UsersLogics extends Logic {

    public getById = this.getByIdAny

    public create = this.createAny

    public update = this.updateAny

    public delete = this.deleteAnyById

    public login = async ({ username, password }) => {
        // find the user by email
        const user = await usersModel.findOne({ username });

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

        // if the passwords match, create a JWT and return it to the client
        const token = "createToken(user)";
        return token;
    }
}

const usersLogic: UsersLogics = new UsersLogics(usersModel, CUser, "user");
export default usersLogic;