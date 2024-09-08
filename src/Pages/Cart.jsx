import React, { useContext, useState } from 'react';
import CartItems from '../Components/CartItems/CartItems';
import './CSS/Cart.css'


const Cart = () => {

    return (
        <div className='cart'>

        <CartItems  ></CartItems>
     

    
        </div>
      
    );
}

export default Cart;
