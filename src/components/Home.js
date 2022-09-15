import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <div className="card">
        <img
          src="https://cdn.shopify.com/s/files/1/0012/9259/9331/files/Store_bg_v4_1024x1024.jpg?v=1596729020"
          className="card-img img-fluid"
          alt="bg"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder fs-1 text-light">
              Now Shop are Ready For You
            </h5>
            <p className="card-text lead fs-2">Chekout All the reads</p>
            <button className="btn btn-outline-light">Go Shop Now</button>
          </div>
        </div>
      </div>
      <Products />
    </>
  );
};

export default Home;
