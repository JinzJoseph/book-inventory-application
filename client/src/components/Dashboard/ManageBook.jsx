import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "flowbite-react";
import axios from "axios";
const ManageBook = () => {
  const [allBooks, SetAllBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://127.0.0.1:5000/all-books");
      //console.log(res.data);
      SetAllBooks(res.data);
    };
    fetchData();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/delete-book/${id}`);
      alert("Book Deleted Successfully");
      window.location.reload(); // Reload the page after deletion
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Book</h2>
      <div className="overflow-x-auto">
        <Table className="lg:w-[1180px]">
          <Table.Head>
            <Table.HeadCell>No</Table.HeadCell>
            <Table.HeadCell>Book Name</Table.HeadCell>
            <Table.HeadCell>Author Name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>price</Table.HeadCell>
            <Table.HeadCell>Edit or Manage</Table.HeadCell>
          </Table.Head>
          {allBooks.map((book, index) => (
            <Table.Body className="divide-y" key={index}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell>{book.bookTitle}</Table.Cell>
                <Table.Cell>{book.authorName}</Table.Cell>
                <Table.Cell>{book.category}</Table.Cell>
                <Table.Cell>100$</Table.Cell>
                <Table.Cell className="flex">
                  {" "}
                  <Link
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-2 "
                    to={`/admin/dashboard/edit-book/${book._id}`}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600"
                  >
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ManageBook;
