import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <div className="card">
        <img
          src="https://cdn.shopify.com/s/files/1/0012/9259/9331/files/Store_bg_v4_1024x1024.jpg?v=1596729020"
          className="card-img"
          alt="bg"
        />
      </div>
      <Products />
    </>
  );
};

export default Home;
