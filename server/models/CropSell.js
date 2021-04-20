const mongoose = require('mongoose');

const cropSellSchema = new mongoose.Schema({
	buyer: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
		default: null,
	},
	seller: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
	},
	title: {
		type: String,
		required: [true, 'Empty title'],
	},
	description: {
		type: String,
		required: [true, 'Empty description'],
	},
	selectedFile: [String],
	isSold: {
		type: Boolean,
		required: true,
	},
	buyDate: {
		type: Date,
		default: Date.now,
	},
	buyPrice: {
		type: Number,
		default: null,
	},
});

const CropSell = mongoose.model('cropSell', cropSellSchema);

module.exports = CropSell;
