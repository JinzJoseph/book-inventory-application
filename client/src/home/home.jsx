import React from "react";
import Banner from "../components/Banner";
import FavoritaeBook from "./FavoritaeBook";
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";
import OtherBooks from "./OtherBooks";
import Review from "../components/Review";

const home = () => {
  return (
    <div>
      <Banner />
      <FavoritaeBook/>
      <FavBook/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
    </div>
  );
};

export default home;
