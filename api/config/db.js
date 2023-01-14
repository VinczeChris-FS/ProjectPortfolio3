// Connect to MongoDB database locally through MongoDB Compass
const mongoose = require("mongoose");

// Mongoose uses promises so use async/await
const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected through ${db.connection.host}`);
  } catch (err) {
    console.log(`Error connecting to MongoDB: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
