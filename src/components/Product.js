import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

const Product = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const respons = await fetch(`http://fakestoreapi.com/products/${id}`);
      setProduct(await respons.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return <h1>Loading...</h1>;
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-4 pt-5">
          <NavLink className="btn btn-outline-primary" to="/products">
            Back
          </NavLink>
          <img
            src={product.image}
            alt={product.title}
            className="object-fit-contain"
            height={400}
          />
        </div>
        <div className="col-md-7 pt-md-5">
          <h3 className="">{product.title}</h3>
          <p>{product.description}</p>
          <button
            className="btn btn-outline-dark m-2"
            onClick={() => addProduct(product)}>
            Add to Cart
          </button>
          <button className="btn btn-outline-dark m-2">Go to Cart</button>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
