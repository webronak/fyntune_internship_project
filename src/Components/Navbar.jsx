import React from "react";
import "./navbar.stylesheet.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-head">My Store</div>
      <div>
        <button className="btn">Cart</button>
        <button className="btn">Check out</button>
      </div>
    </div>
  );
};

export default Navbar;
