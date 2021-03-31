const express = require('express');
const authController = require('../controllers/authController');
const passport = require('passport');

const router = express.Router();

router.post('/signup', authController.signup_post);

router.post(
	'/signin',
	passport.authenticate('local', { session: false }),
	authController.signin_post
);

router.get(
	'/signout',
	passport.authenticate('jwt', { session: false }),
	authController.signout_get
);

module.exports = router;
