require('dotenv').config();
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const jwtStrategy = require('passport-jwt').Strategy;
const User = require('./models/User');

// Environment variables
const STRATEGY_KEY = process.env.STRATEGY_KEY;

const cookieExtractor = req => {
	let token = null;

	// Retrieve the token from cookies
	if (req && req.cookies) {
		token = req.cookies['access_token'];
	}

	return token;
};

// Authorization for protected routes
passport.use(
	new jwtStrategy(
		{
			jwtFromRequest: cookieExtractor,
			secretOrKey: STRATEGY_KEY,
		},
		(payload, done) => {
			User.findById({ _id: payload.sub }, (err, user) => {
				// Check for error
				if (err) return done(err, false);

				// Check if user exists
				if (user) return done(null, user);

				return done(null, false);
			});
		}
	)
);

// Local strategy using username and password
passport.use(
	new localStrategy((username, password, done) => {
		User.findOne({ username }, (err, user) => {
			// Error while fetching the user from database
			if (err) return done(err);

			// No such user exists
			if (!user) return done(null, false);

			// Check if entered password matches
			user.comparePassword(password, done);
		});
	})
);
