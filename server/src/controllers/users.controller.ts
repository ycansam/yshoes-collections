import usersLogic from "../logics/users.logic";
import CUser from "../classes/users.class";
import Controller from "./controller.controller";


class UsersController extends Controller {

    public getById = this.getByIdAny

    public create = this.createAny

    public update = this.updateAny

    public delete = this.deleteAny

}

const usersController: UsersController = new UsersController(usersLogic, CUser, "user");
export default usersController;