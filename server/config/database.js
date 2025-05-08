const mongoose = require('mongoose');

// Use the MongoDB Atlas URI you defined
const MONGODB_URI = 'mongodb+srv://krithikafnu:U4aqwMt8LkLMPGFe@cluster0.obznhog.mongodb.net/clientdb?retryWrites=true';

async function connectToDatabase() {
  try {
    // Remove the deprecated options - they're not needed in Mongoose 6+
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    // Consider adding process.exit(1) for critical failures if appropriate
  }
}

module.exports = connectToDatabase;