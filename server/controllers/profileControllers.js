require('dotenv').config();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse');

// Environment variables
const JWT_SECRET = process.env.JWT_SECRET;

/**
 *
 * @param {String} req.body jwt token
 * @returns
 */
const stats_post = async (req, res, next) => {
	const token = req.body;
	try {
		const decodedToken = jwt.verify(token, JWT_SECRET);
		User.find({ _id: decodedToken.id })
			.then(async user => {
				const userStats = await getUserStats(user);
				console.log(userStats);
				res.status(200).json({ success: true, user: userStats });
			})
			.catch(error => {
				console.log(error);
				return next(new ErrorResponse('No such user', 401));
			});
	} catch (error) {
		console.log(error);
		return next(new ErrorResponse('Unauthorized user', 401));
	}
};

const getUserStats = user => {
	return user;
};

module.exports = {
	stats_post,
};
