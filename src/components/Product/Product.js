import React from 'react';
import './Product.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    let { img, name, url, seller, price, stock } = props.product;
    
   
    return (
        <div className="product">

            <div className="product-img">
                <img src={img} alt="" />
            </div>

            <div className="product-desc">
                <a href={url}>{name}</a>
                <br />

                <p><small>by: </small>{seller}</p>

                <p style={{color: 'chocolate'}}><b><big>${price}</big></b></p>
                <br />

                <p><small>only {stock} left in stock</small></p>

                <button className="add-btn" onClick={() => { return props.handleAddProduct(props.product)}}><FontAwesomeIcon icon={faShoppingCart} />  add to cart</button>
            </div>

        </div>

    );
};

export default Product;