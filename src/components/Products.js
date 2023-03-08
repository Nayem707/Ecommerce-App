import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("http://fakestoreapi.com/products");

      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return <h1>Loading....</h1>;
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-item-center mb-sm-4">
          <button className="btn btn-dark me-2" onClick={() => setFilter(data)}>
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}>
            Men
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}>
            Womens
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}>
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}>
            Electronics
          </button>
        </div>

        <div className="container">
          <div className="row">
            {filter.map((product) => {
              const { image, title, id, price } = product;
              return (
                <div className="col-md-3 mb-sm-3">
                  <div
                    className="card h-100 text-center p-sm-2 shadow bg-body-dark"
                    style={{ width: "13.5rem" }}>
                    <img
                      src={image}
                      className="card-img-top object-fit-contain"
                      alt={title}
                      height="200px"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{title.substring(0, 12)}</h5>
                      <p className="card-text">${price}</p>
                      <NavLink
                        to={`/products/${id}`}
                        className="btn btn-outline-dark">
                        Add Cart
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-lg-12 mb-5">
            <h1 className="fw-bolder text-center">Letest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
