require('dotenv').config();
const User = require('../models/User');
const CropSell = require('../models/CropSell');
const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse');

// Environment variables
const JWT_SECRET = process.env.JWT_SECRET;

const sellItem_post = async (req, res, next) => {
	const data = req.body;
	const item = data.item;
	try {
		const decodedToken = await jwt.verify(data.token, JWT_SECRET);
		const seller = await User.findById(decodedToken.id);
		const crop = await CropSell.create({
			...item,
			seller,
			isSold: false,
			buyPrice: item.initialPrice,
		});
		User.updateOne({ _id: decodedToken.id }, { $push: { sell: crop } })
			.then(() => res.status(200).json({ success: true }))
			.catch(err => next(new ErrorResponse('Error selling crop', 401)));
	} catch (error) {
		console.log(error);
		return next(new ErrorResponse('Unauthorized user', 401));
	}
};

module.exports = {
	sellItem_post,
};
