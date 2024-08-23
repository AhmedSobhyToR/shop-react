import React , { useState, useContext }from 'react';
import emptyStarIcon from '../Assests/star_dull_icon.png'
import fullStarIcon from '../Assests/star_icon.png'
import './ProductDisplay.css'
import {ShopContext} from '../../Context/ShopContext'
const ProductDisplay = (props) => {

    const product = props.product;
    const {addToCart} =  useContext(ShopContext);

    return (
   
        <div className='product-container'>
            <div className="product-container-left">
                <div className='procuct-item-small'>
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />

                </div>
                <div className='product-item'>
                    <img src={product.image} alt="" />

                </div>

            </div>
            <div className="product-container-right">

                <h2> {product.name}</h2>
                <div className='product-right-rate'>
                    <img src={fullStarIcon} alt="" />
                    <img src={fullStarIcon} alt="" />
                    <img src={fullStarIcon} alt="" />
                    <img src={fullStarIcon} alt="" />
                    <img src={emptyStarIcon} alt="" />
                    <span>(150) ratings</span>
                  
                </div>
                <div className='product-right-prices'>
                    <p>
                        <span className='product-oldPrice'>{product.old_price}$</span>
                        <span className='product-newPrice'>{product.new_price}$</span>
                    </p>

                </div>


                <div className='product-right-size'>
                    <h4>Select Size</h4>
                    <ul>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                        <li>XXL</li>

                    </ul>
                </div>

                <input type="button" value="Add To Cart" onClick = {()=>{addToCart(product.id)}}/>
                <div className='product-category'>
                <p><span>Category: </span>{product.category}</p>
                </div>
              
            </div>
        </div>
       

    );
}

export default ProductDisplay;
