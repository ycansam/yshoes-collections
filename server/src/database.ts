import mongoose, { ConnectOptions } from 'mongoose';
require('dotenv').config();

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

class Database {
    private readonly mongoURI: string = process.env.MONGO_URI;

    constructor() {
        this.setConfig();
    }

    private setConfig(): void {
        mongoose.set('runValidators', true)
        mongoose.set('strictQuery', true)
    }

    public connect(): void {
        mongoose
            .connect(this.mongoURI, options as ConnectOptions)
            .then(() => console.log('MongoDB connected'))
            .catch((err) => console.log(err));
    }


}
const database = new Database();
export default database;