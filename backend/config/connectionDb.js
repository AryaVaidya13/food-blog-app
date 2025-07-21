const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    console.log("MONGO_URI:", process.env.MONGO_URI); // Debug print
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB is connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
  }
};

module.exports = connectDb;
