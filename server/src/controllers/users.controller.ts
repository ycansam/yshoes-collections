import { Response, Request, NextFunction } from "express";
import usersLogic from "../logics/users.logic";
import CUser from "../classes/users.class";
import IMessage from "../interfaces/message.interface";
import Controller from "./controller.controller";

const MESSAGES: IMessage = {
    GET: "User obtained",
    CREATED: "User created",
    UPDATED: "User updated",
    DELETED: "User deleted",
}

class UsersController extends Controller {

    public getById = this.getByIdAny

    public create = this.createAny

    public update = this.updateAny

    public delete = this.deleteAny

}

const usersController: UsersController = new UsersController(usersLogic, CUser, MESSAGES);
export default usersController;