require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Environment variables
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRY = process.env.JWT_EXPIRY;

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, 'Empty username'],
	},
	email: {
		type: String,
		unique: [true, 'Email already registered'],
		match: [
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			'Invalid email',
		],
		required: [true, 'Empty email'],
	},
	password: {
		type: String,
		required: [true, 'Empty password'],
		minlength: [6, 'Short password'],
		select: false,
	},
});

/**
 *
 * @description Hash registered user's password
 *
 */

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}

	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

/**
 *
 * @param {Number} password user entered password
 * @returns boolean value
 * @description compares the passwords
 *
 */

userSchema.methods.matchPasswords = async function (password) {
	return await bcrypt.compare(password, this.password);
};

/**
 *
 * @returns signed token
 *
 */

userSchema.methods.getSignedToken = function () {
	return jwt.sign({ id: this._id }, JWT_SECRET, { expiresIn: JWT_EXPIRY });
};

const User = mongoose.model('user', userSchema);

module.exports = User;
