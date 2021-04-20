require('dotenv').config();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse');
const CropSell = require('../models/CropSell');

// Environment variables
const JWT_SECRET = process.env.JWT_SECRET;

/**
 *
 * @param {String} req.body jwt token
 * @returns
 */
const stats_post = async (req, res, next) => {
	const token = req.body.token;
	try {
		const decodedToken = jwt.verify(token, JWT_SECRET);
		User.findOne({ _id: decodedToken.id })
			.then(async user => {
				sellItems = [];
				user.sell.map(id => {
					CropSell.findById(id).then(crop => {
						// console.log(crop);
						sellItems.push(crop);
					});
				});
				const stats = { user, sellItems };
				res.status(200).json({ success: true, stats });
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

const profilePicture_post = async (req, res, next) => {
	const { token, img } = req.body;
	try {
		const decodedToken = await jwt.verify(token, JWT_SECRET);
		User.updateOne({ _id: decodedToken.id }, { profilePicture: img })
			.then(() => res.status(201).json({ success: true }))
			.catch(err => {
				console.log(err);
				res.status(401).json({ sucess: false, error: err.message });
			});
	} catch (error) {
		console.log(error);
		return next(new ErrorResponse('Error updating picture', 401));
	}
};

module.exports = {
	stats_post,
	profilePicture_post,
};
