import React from "react";
import FavBookImg from "../../assets/favoritebook.jpg";
import { Link } from "react-router-dom";

const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center">
      <div className="md:w-1/2">
        <img src={FavBookImg} alt="" className="rounded md:w-10/12" />
      </div>
      <div className="md:w-1/2 ">
        <h2 className="text-5xl font-bold my-5 md:w-3/4 leading-snug">
          {" "}
          Find Your Favourite Book
          <span className="text-blue">Book Here !</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
            <div>
                <p className="text-3xl">800+</p>
                <p className="text-base">Book Listing</p>
            </div>
            <div>
                <p className="text-3xl">540+</p>
                <p className="text-base">Register Users</p>
            </div>
            <div>
                <p className="text-3xl">800+</p>
                <p className="text-base">Book Listing</p>
            </div>
            <div>
                <p className="text-3xl">1200+</p>
                <p className="text-base">pdf Downloads</p>
            </div>
        </div>
        <Link to='/shop'  className="mt-12 bock">
            <button className=" bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black  transition-all duration-300">Explore More</button>
        </Link>
      </div>
    </div>
  );
};

export default FavBook;
