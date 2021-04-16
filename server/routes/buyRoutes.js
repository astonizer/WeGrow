const express = require('express');
const buyControllers = require('../controllers/buyControllers')

const router = express.Router();

router.get('/', buyControllers.items_get);

module.exports = router;
