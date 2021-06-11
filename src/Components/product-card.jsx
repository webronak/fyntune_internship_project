import React from 'react';
import img from '../images/oppo.jpg';
import './product-card.stylesheet.css';
import { connect } from 'react-redux';
import { addItemToCart } from '../redux/cart/cart.action';

const ProductCard = (props) => {
    return(
        <div className="product-card">
             <div className="product-img" style={{backgroundImage:`url(${props.product.img})`}}></div>
            <div className="product-desc">
                <h3>{props.product.name}</h3>
                <h3>${props.product.price}</h3>
                <button className="btn" onClick={()=>props.addItemToCart(props.product)}>Add to cart</button>
            </div>
        </div>
    )
}

const dispatchStateToProps = dispatch => ({
    addItemToCart:item=>dispatch(addItemToCart(item))
})

export default connect(null,dispatchStateToProps)(ProductCard);