
import mongoose from 'mongoose';
import IUser from '../interfaces/users.interface';
const { Schema } = mongoose;

const validateNoSpaces = (str: String): boolean => {
    return str.indexOf(' ') === -1;
}


const UserModel = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
        validate: [validateNoSpaces, "Name cannot contain spaces"],
        minlength: 1,
    },
    password: {
        type: String,
        required: true,
        validate: [validateNoSpaces, "Password cannot contain spaces"],
        minlength: 4,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
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
mongoose.set('runValidators', true)
module.exports = mongoose.model('User', UserModel);