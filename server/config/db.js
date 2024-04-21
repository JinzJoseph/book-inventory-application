const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/BookInventory');
    console.log("Mongodb connected ");
  } catch (error) {
    console.log("Mongodb Server Issue "+error);
  }
};

module.exports = connectDB;
