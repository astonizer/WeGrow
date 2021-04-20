const express = require('express');
const buyControllers = require('../controllers/buyControllers');

const router = express.Router();

router.get('/', buyControllers.items_get);
router.post('/crop/:id', buyControllers.bidCrop_post);
router.get('/refresh', buyControllers.refresh_get);

module.exports = router;
