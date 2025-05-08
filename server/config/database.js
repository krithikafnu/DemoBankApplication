const mongoose = require('mongoose');
const dotenv = require('dotenv'); // Import the dotenv library
const MONGODB_URI = process.env.MONGODB_URI; // Access the variable from the .env file

// Load environment variables from .env file
dotenv.config();

async function connectToDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
  }
}

module.exports = connectToDatabase;