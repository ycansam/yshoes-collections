import Logic from "./logic.logic";
import CUser from "../classes/users.class";
const usersModel = require('../models/users.model')

class UsersLogics extends Logic {

    public getById = this.getByIdAny

    public create = this.createAny

    public update = this.updateAny

    public delete = this.deleteAnyById

    public login = async ({ username, password }) => {

    }
}

const usersLogic: UsersLogics = new UsersLogics(usersModel, CUser, "user");
export default usersLogic;