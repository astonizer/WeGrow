const User = require('../models/User');

const items_get = (req, res, next) => {
	User.aggregate([
		{
			$unwind: '$sell',
		},
	])
		.then(res => console.log(res))
		.catch(err => console.log(err));
	res.status(200).json({ done: true });
};

module.exports = {
	items_get,
};
