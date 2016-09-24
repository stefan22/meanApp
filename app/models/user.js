// require mongoose to use Scheema method
var mongoose = require('mongoose');
// use schema
var Schema = mongoose.Scheema;
// bcrypt
var bcrypt = require('bcrypt-nodejs');

// new user schema object
var UserSchema = new Scheema({
	name: String,
	// name doesn't have a condition but username does
	username: {
		type: String,
		required: true,
		index: {
			unique: true
		}
	},
	password: {
		type: String,
		required: true,
		// later if we query user, we don't wanna query passwd.
		select: false
	}
});


// hashing password before reaching database

UserSchema.pre('save', function(next) {

	var user = this;
	// perform some validation
	if (!user.isModified('password')) {
		// move on to the next episode
		return next();
	}

	bcrypt.hash(user.password, null, null, function(err, hash) {
		if (err) {
			return next(err);
		} else {
			user.password = hash;
			next();
		}

	});

});
















// in order to export user object
module.exports = mongoose.model('User', UserSchema);

