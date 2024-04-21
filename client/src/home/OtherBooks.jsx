import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard';
import axios from 'axios';

const OtherBooks = () => {
    const [books,SetBooks]=useState([])
    useEffect(() => {
        const fetchData = async () => { 
          try {
            const res = await axios.get('http://localhost:5000/all-books', {
              headers: { 'Content-Type': 'application/json' }
            });
           console.log(res)
            SetBooks(res.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData(); // Call the asynchronous function
      }, []); // Empty dependency array to run only once on component mount
    
  return (
    <div>
      <BookCard books={books} headline="Other Books"/>
    </div>
  )
}

export default OtherBooks
