import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {FaCartShopping } from "react-icons/fa6"
import "./BookCard.css";

import { Pagination } from "swiper/modules";
const BookCard = ({ headline, books }) => {
  console.log(books);
  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-black mb-6">{headline}</h2>
      {/* cards */}

      <div >
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {books.map((book) => {
            return (
              <SwiperSlide key={book._id}>
                <Link to={`book/${book._id}`}>
                  <div className="relative">
                    <img src={book.imageURL} alt="" />
                    <div className= "absolute top-3 right-3 bg-blue-600 hover :bg-black p-2 rounded">
                        <FaCartShopping className="w-4 h-4 text-white"/>
                    </div>
                    <div>
                      <h4 className="text-black ">{book.bookTitle}</h4>
                      <p>{book.authorName}</p>
                    </div>
                    <div>
                      <p>10$</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCard;
