import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src={logo}
              alt="Logo"
              style={{ height: "30px", marginRight: "8px" }}
            />
            Flipkart Clone
          </a>

          {/* Toggle button (mobile shows icons) */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#topNav"
            aria-controls="topNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="d-flex">
              <i className="bi bi-search mx-2" style={{ fontSize: "1.2rem" }}></i>
              <i className="bi bi-person mx-2" style={{ fontSize: "1.2rem" }}></i>
              <i className="bi bi-cart mx-2" style={{ fontSize: "1.2rem" }}></i>
            </div>
          </button>

          {/* Collapsible content (desktop shows full buttons) */}
          <div className="collapse navbar-collapse" id="topNav">
            <div className="ms-auto d-flex align-items-center gap-2">
              <button className="btn btn-light d-flex align-items-center">
                <i className="bi bi-search me-1"></i>
                <span className="d-none d-lg-inline">Search</span>
              </button>
              <button className="btn btn-light d-flex align-items-center">
                <i className="bi bi-person me-1"></i>
                <span className="d-none d-lg-inline">Login</span>
              </button>
              <button className="btn btn-light d-flex align-items-center">
                <i className="bi bi-cart me-1"></i>
                <span className="d-none d-lg-inline">Cart</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Second Line: Category Row (always visible) */}
      <div className="d-flex justify-content-around bg-white p-2 border-bottom flex-wrap category-row">
        <div className="text-center">
          <i className="bi bi-star-fill"></i>
          <div>For You</div>
        </div>
        <div className="text-center">
          <i className="bi bi-bag-fill"></i>
          <div>Fashion</div>
        </div>
        <div className="text-center">
          <i className="bi bi-phone"></i>
          <div>Mobiles</div>
        </div>
        <div className="text-center">
          <i className="bi bi-heart-fill"></i>
          <div>Beauty</div>
        </div>
        <div className="text-center">
          <i className="bi bi-tv"></i>
          <div>Electronics</div>
        </div>
        <div className="text-center">
          <i className="bi bi-house-door"></i>
          <div>Home</div>
        </div>
        <div className="text-center">
          <i className="bi bi-plug"></i>
          <div>Appliances</div>
        </div>
        <div className="text-center">
          <i className="bi bi-controller"></i>
          <div>Toys</div>
        </div>
        <div className="text-center">
          <i className="bi bi-book"></i>
          <div>Books</div>
        </div>
        <div className="text-center">
          <i className="bi bi-cup-hot"></i>
          <div>Furniture</div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
