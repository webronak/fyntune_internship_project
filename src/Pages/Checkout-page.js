import React from 'react';
import './checkout-page.stylesheet.css';
import { connect } from 'react-redux';
// for routing
import { Link } from "react-router-dom";

class CheckOutPage extends React.Component{
    render(){
        return(
            <div className="checkout-page">
                <form>
                    <label>Name</label>
                    <input disabled placeholder={this.props.userDetail.user.name}/>
                    <label>Phone</label>
                    <input disabled placeholder={this.props.userDetail.user.phone}/>
                    <label>Email</label>
                    <input disabled placeholder={this.props.userDetail.user.email}/>
                    <label>Enter address</label>
                    <textarea></textarea>
                    <div className="total-price">Total amount: ${this.props.totalAmount}</div>
                    <Link to="/">
                    <button className="btn confirm-btn">Confirm order</button>
                    </Link>
                </form>

                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userDetail:state.user,
    totalAmount:state.cart.cartItems.reduce((acc,item)=>{
        return acc += item.totalPrice;
    },0)
})

export default connect(mapStateToProps)(CheckOutPage);