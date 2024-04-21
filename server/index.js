const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const book = require("./models/book");
const { ObjectId } = require("mongodb");
const port = 5000;

connectDB();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.post("/admin/upload-book", async (req, res) => {
  try {
    console.log(req);
    const data = req.body;
    // console.log(data);
    const result = await book.insertMany(data);
    const message = true; // Set your message based on the result if needed
    //console.log(result);
    res.status(200).send({ result, message }); // Sending result and message as an object
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/all-books", async (req, res) => {
  try {
    const data = await book.find();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
});
app.patch("/books/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    console.log(updatedData);
    const filter = { _id: new ObjectId(id) };
    const update = {
      $set: updatedData, // No need for spreading updatedData inside $set
    };
    const options = { upsert: true };

    const result = await book.updateOne(filter, update, options);

    console.log(result);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});
// delete a book
app.delete("/delete-book/:id", async (req, res) => {
  try {
    const id = req.params.id; // Extract the book ID from req.params
    //console.log(id);
    const data = await book.deleteOne({ _id: id }); // Assuming 'book' is your Mongoose model
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});
// filter by categoty
app.get("/book-categoty/:id", async (req, res) => {
  try {
    let query = {};
    if (req.query?.category) {
      query = { category: req.query?.category };
    }
    const result = await book.find(query).toArray();
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
});
app.get("/books/:id", async (req, res) => {
  try {
    const id = req.params.id; // Get the id parameter from the URL
    const data = await book.findById(id); // Use findById to find a book by its ID
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
