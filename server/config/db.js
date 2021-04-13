require('dotenv').config();
const mongoose = require('mongoose');

// Environment variables
const DB_URI = process.env.DB_URI;

/**
 *
 * @description connect to mongodb database
 *
 */

const connectDB = async () => {
	try {
		await mongoose.connect(DB_URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: true,
			useUnifiedTopology: true,
		});

		console.log('Connected to MongoDB');
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = connectDB;
