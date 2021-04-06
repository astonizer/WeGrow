const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, 'No name found'],
	},
	email: {
		type: String,
		required: [true, 'No email found'],
	},
	password: {
		type: String,
		required: [true, 'No password found'],
		minLength: [6, 'Short password'],
	},
});

userSchema.pre('save', async function (next) {
	// If password is already hashed, return from here
	if (!this.isModified('password')) return next();

	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

userSchema.methods.comparePassword = function (password, callback) {
	bcrypt.compare(password, this.password, (err, isMatch) => {
		// If some error occured
		if (err) return callback(err);
		else {
			// If required user doesn't match the credentials
			if (!isMatch) return callback(null, isMatch);

			// Return the user if there is a match
			return callback(null, this);
		}
	});
};

const User = mongoose.model('user', userSchema);

module.exports = User;
