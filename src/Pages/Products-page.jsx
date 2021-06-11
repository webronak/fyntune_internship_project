import React from 'react';
import  './products-page.stylesheet.css';
import Navbar from '../Components/Navbar';
import ProductCard from '../Components/product-card';
import products from '../PRODUCTS_DATA.js';

class ProductPage extends React.Component{
    render(){
        return(
            <div className="product-page">
                <Navbar/>
                <div className="product-display">
                {
                    products.map(product=>{
                        return (
                            <ProductCard product={product} key={product._id}/>
                        );
                    })     
                }
                </div>
            </div>
        )
    }
}

export default ProductPage;