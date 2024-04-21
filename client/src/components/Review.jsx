import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa6";

import "swiper/css";
import { Avatar } from "flowbite-react";
import "swiper/css/pagination";
import profile from "../../assets/profile.jpg";
import "./Review.css";


import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <>
      <div className="my-12 px-4 lg:px-24">
        <h1 className="text-5xl font-bold text-center mb-10 leading-snug">
          Our Customer
        </h1>
      </div>
      <div className="sp">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting
                </p>
                <Avatar
                  alt="avatar of jese"
                  img={profile}
                  className="w-10 mb-4"
                  rounded
                />
         
                <h2 className="text-lg font-medium">Mark Ping</h2>
                <p className="text-base">CEO ,ABC company</p>
         
               
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting
                </p>
                <Avatar
                  alt="avatar of jese"
                  img={profile}
                  className="w-10 mb-4"
                  rounded
                />
         
                <h2 className="text-lg font-medium">Mark Ping</h2>
                <p className="text-base">CEO ,ABC company</p>
         
               
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting
                </p>
                <Avatar
                  alt="avatar of jese"
                  img={profile}
                  className="w-10 mb-4"
                  rounded
                />
         
                <h2 className="text-lg font-medium">Mark Ping</h2>
                <p className="text-base">CEO ,ABC company</p>
         
               
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting
                </p>
                <Avatar
                  alt="avatar of jese"
                  img={profile}
                  className="w-10 mb-4"
                  rounded
                />
         
                <h2 className="text-lg font-medium">Mark Ping</h2>
                <p className="text-base">CEO ,ABC company</p>
         
               
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Review;
