const User = require('../models/User');

const items_get = (req, res, next) => {
	let items = [];
	User.find()
		.then(users => {
			users.map(user => {
				user.onSale.map(item => items.push(item));
			});
			res.status(200).json({ success: true, items });
		})
		.catch(err => {
			console.log(err);
			res.status(400).json({ success: false });
		});
};

module.exports = {
	items_get,
};
