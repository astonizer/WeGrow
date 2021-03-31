require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Initializing express app
const app = express();

// Environment variables
const PORT = process.env.PORT || 3000;
const DBURI = process.env.DBURI;

// Importing all routes
const authRoutes = require('./routes/authRoutes');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Auth routes
app.use('/auth', authRoutes);

// Connecting to db
mongoose
	.connect(DBURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(result => {
		console.log('Connected to mongodb');
		app.listen(PORT, () => {
			console.log(`Server listening at port ${PORT}`);
		});
	})
	.catch(err => {
		console.log(err);
	});
