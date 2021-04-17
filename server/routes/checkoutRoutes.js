const express = require('express');
const checkoutControllers = require('../controllers/checkoutControllers');

const router = express.Router();

router.post('/', checkoutControllers.donate_post);

module.exports = router;
