const mongoose = require('mongoose');
const bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String },
    firstname: { type: String},
    surname: { type: String},
    birthdate: { type: Date},
    telnumber: { type: String},
})

// before we save, do this
userSchema.pre('save', function (next) {
    var user = this;
    // from https://stackoverflow.com/questions/14588032/mongoose-password-hashing

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    //generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if(err) return next (err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next (err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

// compare password, checking the password provided and executing callback if matches
userSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return callback(err);
        callback(undefined, isMatch);
    });
};


var User = mongoose.model('myuser', userSchema);

module.exports = User;