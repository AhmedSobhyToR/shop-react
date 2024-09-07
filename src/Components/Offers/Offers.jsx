import React from 'react';
import './Offers.css'
import offers_banned_image from '../Assests/offer.jpg'
const Offers = () => {
    return (
        <div className='offers'>
            <div className='offers-banner'>
                <div className='offers-banner-left'>
                    <h2>Exclusive</h2>
                    <h2>Offers For You</h2>
                    <p>Only On Best Sellers Products</p>
                    <input type="button" value='Check Now' />
                </div>
                <div className="offers-banner-right">
                    <img src={offers_banned_image} alt='' />
                </div>
            </div>
        </div>
    );
}

export default Offers;
