import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import axios from "axios";
const FavoritaeBook = () => {
  const [books, SetBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/all-books", { obj });
        // console.log(res)
        SetBooks(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <BookCard books={books} headline="Best sller Books" />
    </div>
  );
};

export default FavoritaeBook;
