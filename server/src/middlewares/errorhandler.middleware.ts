import { Request, Response, NextFunction } from 'express';
export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error(err.stack);
    let code = 500;
    if (err.message.toLocaleLowerCase().includes('not found')) code = 404;
    if (err.message.toLocaleLowerCase().includes('not updated')) code = 400;

    return res.status(code).json({ name: err.name, message: err.message });
};