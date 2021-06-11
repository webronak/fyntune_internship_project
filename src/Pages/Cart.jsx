import React from "react";
import "./cart.stylesheet.css";
import { connect } from "react-redux";
import { addItemToCart, reduceItemToCart } from "../redux/cart/cart.action";

class Cart extends React.Component {
  render() {
    return (
      <div className="cart">
        <h2>Your cart</h2>
        <div className="cart-items">
          {this.props.cartItems.map((cartItem) => {
            return (
              <div className="cart-item" key={cartItem._id}>
                <div
                  className="cart-item-img"
                  style={{ backgroundImage: `url(${cartItem.img})` }}
                ></div>
                <div className="cart-item-Name">{cartItem.name}</div>
                {cartItem.quantity > 0 ? (
                  <div className="cart-item-quantity">
                    <span
                      className="btn"
                      onClick={() => this.props.increaseQuantity(cartItem)}
                    >
                      +
                    </span>
                    <span className="quantity">{cartItem.quantity}</span>
                    <span
                      className="btn"
                      onClick={() => this.props.decreaseQuantity(cartItem)}
                    >
                      -
                    </span>
                  </div>
                ) : (
                  <div>
                    <span
                      className="btn"
                      onClick={() => this.props.increaseQuantity(cartItem)}
                    >
                      add
                    </span>
                    <span
                      className="btn"
                      onClick={() => this.props.decreaseQuantity(cartItem)}
                    >
                      Delete
                    </span>
                  </div>
                )}
                {cartItem.quantity > 0 ? (
                  <div className="cart-item-total">${cartItem.totalPrice}</div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        <h2>Total : ${
            this.props.cartItems.reduce((acc,item)=>{
                return acc+= item.totalPrice
            },0)
        
        }</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const dispatchStateToProps = (dispatch) => ({
  increaseQuantity: (item) => dispatch(addItemToCart(item)),
  decreaseQuantity: (item) => dispatch(reduceItemToCart(item)),
});

export default connect(mapStateToProps, dispatchStateToProps)(Cart);
