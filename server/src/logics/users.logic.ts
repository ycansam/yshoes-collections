import Logic from "./logic.logic";
import CUser from "../classes/users.class";
const usersModel = require('../models/users.model')
class UsersLogics extends Logic {

    public getById = async (id: String) => {

        const user = await this.model.findById(id);

        return new Promise((resolve, reject) => {
            user ? resolve(user) : reject('No se ha encontrado el usuario')
        })
    }

    public create = (user: CUser) => {

        return new Promise(async (resolve, reject) => {
            try {
                const newuser = await this.model.create(user);
                resolve(true);
            } catch (err) {
                reject(err)
            }
        })

    }

    public update = async (user: CUser) => {

    }

    public delete = async (id: String) => {

    }
}

const usersLogic: UsersLogics = new UsersLogics(usersModel);
export default usersLogic;