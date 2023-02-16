import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import Endpoints from './Endpoints';
import UsersRouter from './routes/users.routes';
class Server {
    private app: Application;
    private readonly port: number = 3001;
    private readonly mongoURI: string = 'mongodb+srv://root:root@yshoescollections.wrbrjwg.mongodb.net/?retryWrites=true&w=majority';

    constructor() {
        this.app = express();
        this.configure();
        this.connectDatabase();
        this.setRoutes();
        this.startServer();
    }

    private configure(): void {
        this.app.use(express.json());
    }

    private connectDatabase(): void {
        mongoose
            .connect(this.mongoURI, {
            })
            .then(() => console.log('MongoDB connected'))
            .catch((err) => console.log(err));
    }

    private setRoutes(): void {
        this.app.use(Endpoints.USERS.DEFAULT_PATH, UsersRouter);

    }

    private startServer(): void {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }
}

const server = new Server();