const express = require('express');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middelwares/authMiddleware');
const openaiRoutes = require('./routes/openaiRoutes');
const authRoutes = require('./routes/authRoutes');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middlewarev
app.use(cors());
app.use(express.json()); // Express's built-in JSON parsing

// Custom error handling middleware
// app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/openai', openaiRoutes);

// http://localhost:5000/api/openai/scifi-image

app.listen(PORT, () => {
  console.log(`Server Running in ${process.env.DEV_MODE} mode on port no ${PORT}`.bgCyan.white);
});
