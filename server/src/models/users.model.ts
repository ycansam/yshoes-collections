
import mongoose from 'mongoose';
import IUser from '../interfaces/users.interface';
import idValidator from 'mongoose-id-validator';
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const saltRounds = 10;


const validateNoSpaces = (str: string): boolean => {
  return str.indexOf(' ') === -1;
}
const isValidEmail = (email: string): boolean => {
  // Regular expression to match against the email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
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
    unique: true,
    validate: [isValidEmail, "Email not valid"],

  },
  role: { type: String, enum: ['user', 'admin'], required: true, default: 'user' },
  name: { type: String },
  surnames: { type: String },
  jwt_access: { type: String },
  cart: {
    type: [{
      id_product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number, required: true, default: 1 },
      color: { type: String },
      size: { type: String },
    }]
  }
});

UserModel.pre('save', function (next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) {
    return next();
  }

  // generate a salt and hash the password using bcrypt
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) {
        return next(err);
      }

      // override the plaintext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

UserModel.plugin(idValidator);
module.exports = mongoose.model('User', UserModel);