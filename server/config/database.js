const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://krithikafnu:U4aqwMt8LkLMPGFe@cluster0.obznhog.mongodb.net/clientdb?retryWrites=true';

async function connectToDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
  }
}

module.exports = connectToDatabase;