require('dotenv').config();
const User = require('../models/User');
const CropSell = require('../models/CropSell');
const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse');

const JWT_SECRET = process.env.JWT_SECRET;

const items_get = async (req, res, next) => {
	let items = [];
	CropSell.aggregate()
		.match({ isSold: false })
		.then(crops => {
			crops.map(crop => {
				items.push(crop);
			});
			res.status(200).json({ success: true, items });
		})
		.catch(err => {
			console.log(err);
			return next(new ErrorResponse('Error fetching crops', 401));
		});
};

const bidCrop_post = async (req, res, next) => {
	// data = {token, newBuyPrice, cropId}
	const {token, newBuyPrice, cropId} = req.body;	

	try {
		const crop = await CropSell.findById(cropId);
		if (newBuyPrice > crop.buyPrice) {
			const decodedToken = jwt.verify(token, JWT_SECRET);
			const buyer = await User.findById(decodedToken.id);
			await CropSell.updateOne({ _id: cropId }, { buyer: buyer });
			await CropSell.updateOne({ _id: cropId }, { buyPrice: newBuyPrice });
		}
		res.status(200).json({ success: true });
	} catch (error) {
		console.log(error);
		return next(new ErrorResponse('Error bidding crops', 401));
	}
};

const refresh_get = (req, res, next) => {};

module.exports = {
	items_get,
	bidCrop_post,
	refresh_get,
};
