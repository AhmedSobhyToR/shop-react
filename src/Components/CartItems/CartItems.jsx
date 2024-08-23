import React, { useContext, useState } from 'react';
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
const CartItems = () => {
    const {all_product,cartItems, removeFromCart} = useContext(ShopContext)
    // console.log(cartItems)
    // console.log(all_product)
    let subTotal = 0;
    return (
        <>
        <div className='cart-items'>

            <table >
                <thead>
                    <th>Products</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                </thead>
                <tbody>
                {all_product.map((e,i)=>{
                    if(cartItems[e.id]> 0){
                        subTotal =  subTotal+all_product[i].new_price* cartItems[e.id];
                 
                        return (
                            <tr>
                            <td><img src={all_product[i].image} alt="" /></td>
                            <td> {all_product[i].name}
                            </td>
                            <td>{all_product[i].new_price}</td>
                            <td>{cartItems[e.id]}</td>
                            <td>{all_product[i].new_price* cartItems[e.id]}$</td>
                            <td style={{cursor:"pointer"}} onClick={()=>{removeFromCart(e.id)}} >X</td>
                        </tr>
                     
                        )
                        
                    }
                })}
                </tbody>
            </table>

        </div>

            
        <div className='cart-total'>
            <div>
            <h4>SubTotal</h4>
            <p>{subTotal}</p>
            </div>
            <hr />
            <div>
                <h4>Shipping Fee</h4>
                <p>Free</p>
            </div>
            <hr />

            <div>
                <h3>Total</h3>
                <p>{subTotal}</p>
            </div>
            <input type="button" value="Checkout" />
  
            </div>
        </>
    );
}

export default CartItems;
