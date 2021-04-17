const express = require('express');
const sellControllers = require('../controllers/sellControllers');

const router = express.Router();

router.post('/', sellControllers.sellItem_post);

module.exports = router;
