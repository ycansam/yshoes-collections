import express, { Application, Request, Response } from 'express';
import Endpoints from './Endpoints';
import UsersRouter from './routes/users.routes';
import Database from './database'
require('dotenv').config();
class Server {
    private app: Application;
    private readonly port: number = 3001;

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
        Database.connect();
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