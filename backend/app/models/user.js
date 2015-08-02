var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;
var bcrypt       = require('bcrypt');

var UserSchema = new Schema({
    name: { type: String, required: true},
    phone: { type: String, required: true},
    hashPassword: { type: String, required: true},
    email: {type: String, match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, unique: true, required: true},
    characters: [{ type: Schema.Types.ObjectId, ref: 'Character', required: true}]
});

UserSchema.pre('save', function(next){
	var user = this;

    // only hash the password if it has been modified (or is new)

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.hashPassword, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
			
            user.hashPassword = hash;
            next();
        });
    });
});

module.exports = mongoose.model('User', UserSchema);