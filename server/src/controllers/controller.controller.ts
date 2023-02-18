import { Response, Request, NextFunction } from "express";
import IMessage from "../interfaces/message.interface";


export default class Controller {

    private logic: any;
    private classRef: any;
    private MESSAGES: IMessage;

    constructor(logic: any, classRef: any, messages: IMessage) {
        this.logic = logic;
        this.classRef = classRef;
        this.MESSAGES = messages;
    }

    public getByIdAny = async (req: Request, res: Response, next: NextFunction) => {

        const { id } = req.params;

        const result = this.logic.getById(id);

        result.then((item: any) => {
            return res.status(200).json(item);
        }).catch((err: Error) => {
            console.log(err.message);
            next(err);
        })
    }

    public createAny = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

        const newItem = new this.classRef(req.body);
        const itemCreated = this.logic.create(newItem);

        itemCreated.then((item: any) => {
            return res.status(200).json({ content: item, message: this.MESSAGES.CREATED });
        }).catch((err: Error) => {
            console.log(err.message);
            next(err);
        })

    }

    public updateAny = async (req: Request, res: Response, next: NextFunction) => {
        const newItem = new this.classRef(req.body);
        const { id } = req.params;

        const itemUpdated = this.logic.update(id, newItem);

        itemUpdated.then((item: any) => {
            return res.status(200).json({ content: item, message: this.MESSAGES.UPDATED });
        }).catch((err: Error) => {
            console.log(err.message);
            next(err);
        })
    }

    public deleteAny = async (req: Request, res: Response, next: NextFunction) => {

        const { id } = req.params;
        const itemDeleted = this.logic.delete(id);

        itemDeleted.then((item: any) => {
            return res.status(200).json({ content: item, message: this.MESSAGES.DELETED });
        }).catch((err: Error) => {
            console.log(err.message);
            next(err);
        })
    }

}
