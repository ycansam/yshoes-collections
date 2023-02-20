require('dotenv').config();
import express, { Application, Request, Response, json, urlencoded } from 'express';
import Endpoints from './Endpoints';
import UsersRouter from './routes/users.routes';
import productsRoutes from './routes/products.routes';
import userCartRoutes from './routes/userCart.routes';
import Database from './database';
import { errorHandler } from './middlewares/errorhandler.middleware';

const cors = require('cors');
class Server {
    private app: Application;
    private readonly port: number = 3001;
    private readonly corsOptions = {
        origin: '*',
        optionsSuccessStatus: 200
    }

    constructor() {
        this.app = express();
        this.configure();
        this.connectDatabase();
        this.setRoutes();
        this.startServer();
    }

    private configure(): void {
        this.app.use(express.json());
        this.app.use(cors(this.corsOptions));
        this.app.use(urlencoded({ extended: false }))
    }

    private connectDatabase(): void {
        Database.connect();
    }

    private setRoutes(): void {
        this.app.use(Endpoints.USERS.DEFAULT_PATH, UsersRouter, errorHandler);
        this.app.use(Endpoints.PRODUCTS.DEFAULT_PATH, productsRoutes, errorHandler);
        this.app.use(Endpoints.CART.DEFAULT_PATH, userCartRoutes, errorHandler);
    }


    private startServer(): void {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }
}

const server = new Server();