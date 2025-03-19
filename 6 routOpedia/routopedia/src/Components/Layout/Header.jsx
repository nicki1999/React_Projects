import React from "react";
import logo from "../../Images/LogoReact.png";
import { Link, NavLink } from "react-router-dom";
import { createPopper } from "@popperjs/core";

function Header() {
  return (
    <div style={{ color: "white" }}>
      {/* <img src={logo} alt="" /> */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <img src={logo} alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="#"
                >
                  Product
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/product">
                      Product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/product/create">
                      Product Create
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="dropdown-item" to="/product/list">
                      Product List
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/product/details">
                      Product Details
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
