require('dotenv').config();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const passportConfig = require('../passport');

const signup_post = (req, res) => {
	const { username, password } = req.body;

	// Check if username exists
	User.findOne({ username }, async (err, user) => {
		// Server error while checking user
		if (err) {
			res.status(500).json({
				message: {
					msgBody: 'Error has occured',
					msgError: true,
				},
			});
		}

		// If username already exists
		if (user) {
			res.status(400).json({
				message: {
					msgBody: 'Username is taken',
					msgError: true,
				},
			});
		}

		// Create new user
		try {
			const user = await User.create({ username, password });
			res.status(201).json({
				message: {
					msgBody: 'Registered successfully',
					msgError: false,
				},
			});
		} catch (err) {
			res.status(500).json({
				message: {
					msgBody: 'Error registering user',
					msgError: true,
				},
			});
		}
	});
};

module.exports = {
	signup_post,
};
