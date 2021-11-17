import React from "react";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <Services />
      <Reviews />
    </div>
  );
};

export default Home;
