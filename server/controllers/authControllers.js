const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @description Register new user in database
 *
 */

const register_post = async (req, res, next) => {
	const { username, email, password } = req.body;

	try {
		const user = await User.create({ username, email, password });

		returnToken(user, 201, res);
	} catch (error) {
		next(error);
	}
};

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @description Login user
 */

const login_post = async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return next(new ErrorResponse('Empty values', 400));
	}

	try {
		const user = await User.findOne({ email }).select('+password');
		if (!user) {
			return next(new ErrorResponse('Invalid Credentials', 401));
		}

		const isMatch = await user.matchPasswords(password);

		if (!isMatch) {
			return next(new ErrorResponse('Invalid Credentails', 401));
		}

		returnToken(user, 200, res);
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
		});
	}
};

const returnToken = (user, statusCode, res) => {
	const token = user.getSignedToken();
	res.status(statusCode).json({
		success: true,
		token,
	});
};

module.exports = {
	register_post,
	login_post,
};
