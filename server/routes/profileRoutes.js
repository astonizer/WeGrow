const express = require('express');
const profileControllers = require('../controllers/profileControllers');

const router = express.Router();

router.post('/', profileControllers.stats_post);
router.post('/picture', profileControllers.profilePicture_post);

module.exports = router;
