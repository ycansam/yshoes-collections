import mongoose from 'mongoose';

class ErrorsMiddleware {

    public filter(err: any): void {
        console.log(err);
    }   

}
const errorsMiddleware = new ErrorsMiddleware();
export default errorsMiddleware;