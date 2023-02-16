import mongoose from 'mongoose';
require('dotenv').config();

class Database {
    private readonly mongoURI: string = process.env.MONGO_URI;

    public connect(): void {
        mongoose
            .connect(this.mongoURI, {
            })
            .then(() => console.log('MongoDB connected'))
            .catch((err) => console.log(err));
    }

}
const database = new Database();
export default database;