import { Response, Request, NextFunction } from "express";
interface Controller {
    getOne: (req: Request, res: Response, next: NextFunction) => {}
}
export default Controller;