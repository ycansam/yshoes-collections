import Logic from "./logic.logic";
import CUser from "../classes/users.class";
import IUser from "../interfaces/users.interface";
const usersModel = require('../models/users.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


class UsersLogics extends Logic {

    public getById = this.getByIdAny

    public create = this.createAny

    public update = this.updateAny

    public delete = this.deleteAnyById


    private Authenticate = async (username: string, password: string) => {
        // find the user by email
        const user: IUser = await usersModel.findOne({ username });

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
        const token = jwt.sign({ id: user._id, username: user.username }, process.env.SECRET_JWT, { expiresIn: 86400 });
        
        // actualiza el token del usuario
        this.update(user._id, { jwt_access: token })
        
        return token;
    }


    public login = async ({ username, password }) => {

        // if the passwords match, create a JWT and return it to the client
        const token = this.Authenticate(username, password);

        return token;
    }
}

const usersLogic: UsersLogics = new UsersLogics(usersModel, CUser, "user");
export default usersLogic;