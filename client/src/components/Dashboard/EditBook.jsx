import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import axios from "axios";

const EditBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({
    bookTitle: "",
    authorName: "",
    imageURL: "",
    category: "",
    bookDescription: "",
    bookPDFURL: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:5000/books/${id}`);
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    fetchData();
  }, [id]);

  const bookcategories = [
    "Fiction", "Non-Fiction", "History", "Programming", "Science Fiction", 
    "Fantasy", "Horror", "Bibliography", "Autobiography", "Self-help", 
    "Memoir", "Business", "Children Books", "Travel"
  ];

  const handleChangesSelectedValue = (e) => {
    setBook({ ...book, category: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const bookTitle = form.BookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.BookImgUrl.value;
    const category = form.categoryname.value;
    const bookDescription = form.desc.value;
    const bookPDFURL = form.bookPdfLink.value;

    const bookData = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };
    try {
      const res = await axios.patch(`http://127.0.0.1:5000/books/${id}`, {bookData});
      console.log(res.data);
      alert("Book updated successfully");
    } catch (error) {
      console.error("Error updating book:", error);
      alert("Failed to update book");
    }
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update Book Data</h2>
      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/* Form fields */}
        {/* First row */}
        <div className="flex gap-9">
          {/* Book Title */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="BookTitle" value="Book Title" />
            </div>
            <TextInput
              id="BookTitle"
              type="text"
              placeholder="Enter the Book Name"
              required
              name="BookTitle"
              value={book.bookTitle}
              onChange={(e) => setBook({ ...book, bookTitle: e.target.value })}
            />
          </div>
          {/* Author Name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              type="text"
              placeholder="Enter the Author Name"
              required
              name="authorName"
              value={book.authorName}
              onChange={(e) => setBook({ ...book, authorName: e.target.value })}
            />
          </div>
        </div>
        {/* Second row */}
        <div className="flex gap-9">
          {/* Book Image URL */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="BookImgUrl" value="Book Image URL" />
            </div>
            <TextInput
              id="BookImgUrl"
              type="text"
              placeholder="Enter the Book Image URL"
              required
              name="BookImgUrl"
              value={book.imageURL}
              onChange={(e) => setBook({ ...book, imageURL: e.target.value })}
            />
          </div>
          {/* Category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="categoryname" value="Category" />
            </div>
            <Select
              id="categoryname"
              name="categoryname"
              className="w-full rounded"
              value={book.category}
              onChange={handleChangesSelectedValue}
            >
              {bookcategories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </div>
        </div>
        {/* Book Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="desc" value="Book Description" />
          </div>
          <Textarea
            id="desc"
            placeholder="Description..."
            name="desc"
            required
            rows={4}
            value={book.bookDescription}
            onChange={(e) => setBook({ ...book, bookDescription: e.target.value })}
          />
        </div>
        {/* Book PDF Link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfLink" value="Book PDF Link" />
          </div>
          <TextInput
            id="bookPdfLink"
            type="text"
            placeholder="Book PDF Link"
            required
            name="bookPdfLink"
            value={book.bookPDFURL}
            onChange={(e) => setBook({ ...book, bookPDFURL: e.target.value })}
          />
        </div>
        {/* Submit Button */}
        <Button type="submit" className="mt-5">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBook;
