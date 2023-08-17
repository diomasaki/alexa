import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Category from "../components/Category";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Category />
      <Products />
    </div>
  );
};

export default Home;
