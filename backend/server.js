const dotenv = require('dotenv').config();
const express = require('express');
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

const app = express();

// JSON and URL Encoded Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
