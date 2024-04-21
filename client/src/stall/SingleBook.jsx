import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState([]); // Initialize book state to null

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/books/${id}`, {
                    headers: { 'Content-Type': 'application/json' }
                });
                console.log(res.data);
               setBook(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]); // Include id in the dependency array

    return (
        <div>
            <div className='items-center '>
           
              <img  className=" w-full h-50 " src={book.imageURL} alt=""/>
              <h3>{book.bookTitle}</h3>
              <h3>{book.authorName}</h3>
            </div>
        </div>
    );
};

export default SingleBook;
