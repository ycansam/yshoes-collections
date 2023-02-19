import { Response, Request, NextFunction } from "express";

export default class Controller {

    private logic: any;
    private classRef: any;
    private nameRef: string;

    constructor(logic: any, classRef: any, nameRef: string) {
        this.logic = logic;
        this.classRef = classRef;
        this.nameRef = nameRef;
    }

    protected getByIdAny = async (req: Request, res: Response, next: NextFunction) => {

        const { id } = req.params;

        const result = this.logic.getById(id);

        result.then((item: any) => {
            return res.status(200).json(item);
        }).catch((err: Error) => {
            console.log(err.message);
            next(err);
        })
    }

    protected createAny = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

        try {
            const newItem = new this.classRef(req.body);
            const itemCreated = this.logic.create(newItem);

            itemCreated.then((item: any) => {
                return res.status(200).json({ content: item, message: this.nameRef + " created" });
            }).catch((err: Error) => {
                console.log(err.message);
                next(err);
            })
        } catch (err) {
            next(err);
        }
    }

    protected updateAny = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newItem = new this.classRef(req.body);
            const { id } = req.params;

            const itemUpdated = this.logic.update(id, newItem);

            itemUpdated.then((item: any) => {
                return res.status(200).json({ content: item, message: this.nameRef + " updated" });
            }).catch((err: Error) => {
                console.log(err.message);
                next(err);
            })
        } catch (err) {
            next(err);
        }

    }

    protected deleteAny = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const itemDeleted = this.logic.delete(id);

            itemDeleted.then((item: any) => {
                return res.status(200).json({ content: item, message: this.nameRef + " deleted" });
            }).catch((err: Error) => {
                console.log(err.message);
                next(err);
            })
        } catch (err) {
            next(err);
        }

    }

}
