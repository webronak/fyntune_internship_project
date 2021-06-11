import React from "react";
import "./navbar.stylesheet.css";
// for routing
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-head">My Store</div>
      <div>
      <Link to="/products">
        <button className="btn">Products</button>
        </Link>
      <Link to="/cart">
        <button className="btn">Cart</button>
        </Link>
        <Link to="/check_out">
        <button className="btn">Check out</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
