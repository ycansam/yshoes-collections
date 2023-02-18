
const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');
const { Schema } = mongoose;
// const bcrypt = require('bcryptjs');

const UserModel = new Schema({
    username: { type: String, required: true, unique: true },
    name: { type: String },
    surnames: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    jwt_access: { type: String }
});


UserModel.pre('save', function (next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    // if (!user.isModified('password')) return next();

    // // generate a salt
    // bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    //     if (err) return next(err);

    //     // hash the password using our new salt
    //     bcrypt.hash(user.password, salt, function (err, hash) {
    //         if (err) return next(err);
    //         // override the cleartext password with the hashed one
    //         user.password = hash;
    //         next();
    //     });
    // });
});

UserModel.plugin(idValidator);
// exportando modelo
export default mongoose.model('User', UserModel);