const express = require('express');
const authControllers = require('../controllers/authControllers');

const router = express.Router();

/**
 *
 * @access Public
 * @description Register new user
 *
 */

router.post('/register', authControllers.register_post);

/**
 *
 * @access Public
 * @description Login user
 *
 */

router.post('/login', authControllers.login_post);

module.exports = router;
