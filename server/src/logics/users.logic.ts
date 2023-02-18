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

    public create = (user: CUser): Promise<boolean> => {
        return new Promise(async (resolve, reject) => {
            try {
                await this.model.create(user);
                resolve(true);
            } catch (err) {
                reject(err)
            }
        })

    }

    public update = async (id: string, user: CUser): Promise<boolean> => {
        return new Promise(async (resolve, reject) => {
            try {
                await this.model.findByIdAndUpdate(id, user);
                resolve(true);
            } catch (err) {
                reject(err)
            }
        })

    }

    public delete = async (id: String) => {

    }
}

const usersLogic: UsersLogics = new UsersLogics(usersModel);
export default usersLogic;