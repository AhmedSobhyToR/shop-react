import React, { useContext, memo } from 'react'; 
import emptyStarIcon from '../Assests/star_dull_icon.png';
import fullStarIcon from '../Assests/star_icon.png';
import './ProductDisplay.css';
import { CartContext } from '../../Context/CartContext';

const ProductDisplay = (props) => {
    const product = props.product;
    console.log(product);
    const { addToCart } = useContext(CartContext);
 
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
                <h2>{product.name}</h2>
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
                        <li tabindex="0">S</li>
                        <li tabindex="0">M</li>
                        <li tabindex="0">L</li>
                        <li tabindex="0">XL</li>
                        <li tabindex="0">XXL</li>
                    </ul>
                </div>

                <button onClick={() => addToCart(product.id)}>Add To Cart</button>

                <div className='product-category'>
                    <p><span>Category: </span>{product.category}</p>
                </div>
            </div>
        </div>
    );
}

export default memo(ProductDisplay);
