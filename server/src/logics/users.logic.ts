import Logic from "./logic.logic";
import CUser from "../classes/users.class";
const usersModel = require('../models/users.model')
class UsersLogics extends Logic {

    public getById = this.getByIdAny

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
                // Lo busca y lo actualiza. Si no lo encuentra tira un nuevo error
                const doc = await this.model.findByIdAndUpdate(id, user);

                doc ? resolve(true) : reject(new Error("user does not exist"));
            } catch (err) {
                reject(err)
            }
        })

    }

    public delete = async (id: String) => {
        return new Promise(async (resolve, reject) => {
            try {
                // Lo busca y lo elimina. Si no lo encuentra tira un nuevo error
                const doc = await this.model.findByIdAndDelete(id);

                doc ? resolve(true) : reject(new Error("user does not exist"));
            } catch (err) {
                reject(err);
            }
        })
    }
}

const usersLogic: UsersLogics = new UsersLogics(usersModel, CUser, "user");
export default usersLogic;