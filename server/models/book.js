const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookTitle: {
    type: String,
    required: [true, "bookTitle is required"],
  },
  authorName: {
    type: String,
    required: [true, "authorName is required"],
  },
  imageURL: {
    type: String,
    required: [true, "imageURL is required"],
  },
  category: {
    type: String,
    required: [true, "category is required"],
  },
  bookDescription: {
    type: String,
    required: [true, "bookDescription is required"],
  },
  bookPDFURL: {
    type: String,
    required: [true, "bookPDFURL is required"],
  },
});

const bookModel = mongoose.model("book", bookSchema);

module.exports = bookModel;
