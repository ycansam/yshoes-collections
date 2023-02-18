
import mongoose from 'mongoose';
import IUser from '../interfaces/users.interface';
const { Schema } = mongoose;

const UserModel = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    name: { type: String },
    surnames: { type: String },
    jwt_access: { type: String },
    cart: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Product"
        }]
    }
},
    { strict: true }
);

module.exports = mongoose.model('User', UserModel);