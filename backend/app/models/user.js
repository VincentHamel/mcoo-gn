var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;
var bcrypt       = require('bcrypt');

var UserSchema = new Schema({
    name: String,
    phone: String,
	hashPassword: String,
    email: {type: String, match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, unique: true},
    characters: [{ type: Schema.Types.ObjectId, ref: 'Character' }]
});

UserSchema.pre('save', function(next){
	var user = this;

    // only hash the password if it has been modified (or is new)
	//console.log(user.isModified('hashPassword'));
    //if (!user.isModified('hashPassword')) return next();

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