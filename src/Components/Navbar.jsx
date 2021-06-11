import React from "react";
import "./navbar.stylesheet.css";
// for routing
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const Navbar = (props) => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="nav-head">My Store</div>
      </Link>
      <div>
        <Link to="/products">
          <button className="btn">Products</button>
        </Link>
        <Link to="/cart">
          <button className="btn">Cart<span className="indicator">{props.itemsQuantity}</span></button>
        </Link>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  itemsQuantity:state.cart.cartItems.reduce((acc,item)=>{
    return acc+=item.quantity;
  },0)
})
export default connect(mapStateToProps)(Navbar);
