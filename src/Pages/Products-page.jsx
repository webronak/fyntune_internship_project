import React from 'react';
import  './products-page.stylesheet.css';
import Navbar from '../Components/Navbar';
import ProductCard from '../Components/product-card';

class ProductPage extends React.Component{
    render(){
        return(
            <div className="product-page">
                <Navbar/>
                <div className="product-display">
                    <ProductCard/>
                </div>
            </div>
        )
    }
}

export default ProductPage;