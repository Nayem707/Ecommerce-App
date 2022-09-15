import React from "react";
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          Chess24
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#d"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </li>
            <form className="d-flex" role="search">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </ul>
          <div className="buttons-icon">
            <NavLink
              className="btn btn-outline-success position-relative"
              to="/cart"
            >
              <i className="fa-sharp fa-solid fa-cart-shopping">
                <span className="position-absolute top-0 start-20 translate-middle badge rounded-pill bg-danger">
                  {state.length}
                </span>
              </i>
            </NavLink>
            <NavLink className="btn" to="/loging">
              <i className="fa-sharp fa-solid fa-user-plus "></i>
            </NavLink>
            <NavLink className="btn" to="/register">
              <i className="fa-solid fa-user-pen "></i>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
