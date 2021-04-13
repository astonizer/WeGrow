const express = require('express');

const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorMiddlewares');

// Initialize express app
const app = express();

// Importing all routes
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();
const feedRoutes = require('./routes/feedRoutes');

// Environment variables
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());

// Database connection
connectDB();

// Authentication routes
app.use('/api/auth', authRoutes);

// Private routes
app.use('/api/feed', feedRoutes);

// Error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
