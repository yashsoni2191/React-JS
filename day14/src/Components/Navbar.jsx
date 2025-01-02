import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-custom">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Trendify</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/"}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/product"}>Product</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/cart"}>Cart</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/login"}>Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/signup"}>Signup</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
