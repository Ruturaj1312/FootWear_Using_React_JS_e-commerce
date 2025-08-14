import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container-fluid px-4">

        {/* Brand Logo */}
        <Link className="navbar-brand d-flex align-items-center fw-bold fs-4" to="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            style={{ height: "40px", width: "auto", marginRight: "10px" }}
          />
          <span className="text-primary">FootWear</span>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3 text-uppercase fw-semibold">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/men">Men</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/women">Women</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/all_product">All Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Right Side Icons */}
          <ul className="navbar-nav d-flex align-items-center gap-3">
            <li className="nav-item">
              <Link className="nav-link fw-semibold text-dark" to="/cart">
                <i className="fas fa-shopping-cart me-1"></i>
                Cart <span className="badge badge-danger">{cartItems.product.length}</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold text-dark" to="/admin_login">
                <i className="fas fa-user-shield me-1"></i>
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold text-dark" to="/login">
                <i className="fas fa-user me-1"></i>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
