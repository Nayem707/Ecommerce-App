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
        <div className="buttons d-flex justify-item-center mb-4 pb-5">
          <button className="btn btn-dark me-2" onClick={() => setFilter(data)}>
            All
          </button>
          <button
            className="btn btn-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Menhrefs
          </button>
          <button
            className="btn btn-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Womens
          </button>
          <button
            className="btn btn-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>

        {filter.map((product) => {
          return (
            <div className="d-flex justify-item-center" key={product.id}>
              <div className="col-md-3 mb-4">
                <div
                  className="card h-100 text-center p-4"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.title.substring(0, 12)}
                    </h5>
                    <p className="card-text">${product.price}</p>
                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn btn-primary"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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