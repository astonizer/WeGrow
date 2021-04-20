require('dotenv').config();
const User = require('../models/User');
const CropSell = require('../models/CropSell');
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
	const { data } = req.body;
	// data = {token, newBuyPrice, cropId}
	try {
		const crop = await CropSell.findById(data.cropId);
		if (data.newBuyPrice > crop.buyPrice) {
			const decodedToken = jwt.verify(data.token, JWT_SECRET);
			const buyer = await User.findById(decodedToken.id);
			CropSell.updateOne({ _id: cropId }, { buyer: buyer });
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
