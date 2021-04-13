require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

const JWT_SECRET = process.env.JWT_SECRET;

const checkAuth = async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Gotcha')
	) {
		token = req.headers.authorization.split(' ')[1];
	}

	if (!token) {
		return next(new ErrorResponse('Unauthorized user', 401));
	}

	try {
		const decodedToken = jwt.verify(token, JWT_SECRET);

		const user = await User.findById(decodedToken.id);

		if (!user) {
			return next(new ErrorResponse('No such user', 404));
		}

		req.user = user;

		next();
	} catch (error) {
		return next(new ErrorResponse('Unauthorized user', 401));
	}
};

module.exports = checkAuth;
