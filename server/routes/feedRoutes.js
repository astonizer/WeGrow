const express = require('express');
const checkAuth = require('../middlewares/authMiddlewares');

const router = express.Router();

router.get('/', checkAuth, (req, res, next) => {
	res.status(200).json({
		success: true,
		data: 'Congratulations',
	});
});

module.exports = router;
