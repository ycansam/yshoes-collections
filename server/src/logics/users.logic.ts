import usersModel from "../models/users.model";

class UsersLogics {

    public getOne = async () => {

        const query = { name: "hola" };
        const users = await usersModel.findOne(query);

        return new Promise((resolve, reject) => {
            users ? resolve(users) : reject('No se ha encontrado el usuario')
        })
    }

}

const usersLogic: UsersLogics = new UsersLogics();
export default usersLogic;