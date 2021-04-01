require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const passportConfig = require('../passport'); // This line is important for authentication

// Environment variables
const STRATEGY_KEY = process.env.STRATEGY_KEY;

/**
 *
 * @param {Number} userID
 * @returns a signed token
 */
const signToken = userID => {
	return jwt.sign(
		{
			iss: STRATEGY_KEY,
			sub: userID,
		},
		STRATEGY_KEY,
		{
			expiresIn: '1h',
		}
	);
};

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @description registers a new user in database
 */
const signup_post = (req, res) => {
	const { username, email, password } = req.body;

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
			const user = await User.create({ username, email, password });
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

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @description authenticates user
 */
const signin_post = (req, res) => {
	if (req.isAuthenticated()) {
		const { _id, username, email } = req.user;
		const token = signToken(_id);
		res.cookie('access_token', token, {
			httpOnly: true,
			sameSite: true,
		});
		res.status(200).json({
			isAuthenticated: true,
			user: {
				username,
				email,
			},
		});
	}
};

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @description Logs out the user
 */
const signout_get = (req, res) => {
	res.clearCookie('access_token');
	res.json({
		user: {
			username: '',
			email: '',
		},
		success: true,
	});
};

module.exports = {
	signup_post,
	signin_post,
	signout_get,
};
