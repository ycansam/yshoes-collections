import usersModel from "../models/users.model";
import Logic from "./logic.logic";
class UsersLogics extends Logic {

    public getOne = async () => {

        const query = {};
        const users = await this.model.findOne(query);

        return new Promise((resolve, reject) => {
            users ? resolve(users) : reject('No se ha encontrado el usuario')
        })
    }
}

const usersLogic: UsersLogics = new UsersLogics(usersModel);
export default usersLogic;