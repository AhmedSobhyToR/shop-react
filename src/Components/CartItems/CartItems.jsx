import React, { useContext, useEffect, useState } from 'react';
import './CartItems.css'
import { CartContext } from '../../Context/CartContext';
import { ProductContext } from '../../Context/ProductContext';
import CartItemCard from '../CartItemCard/CartItemCard';

const CartItems = () => {
    const {cartItems, removeFromCart, getDefaultCart,setCartItems} = useContext(CartContext)
    const {all_product} = useContext(ProductContext)
     const [totalPay, setTotalPay] = useState(0);
  
    useEffect(()=>{
        let total = 0;
        all_product.map((item)=>{
        if(cartItems[item.id]> 0){
            console.log(item.id);
            total+= parseInt(cartItems[item.id]*item.new_price);
        }
      })
      setTotalPay(total)
    },[all_product,cartItems])

    const Swal = require('sweetalert2');
    function handlePayClick(){
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "button-success",
              cancelButton: "button-cancel"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure you want to proceed?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Confirm!",
            cancelButtonText: "No, Cancel!",
            reverseButtons: true
          }).then((result) => {
    
     
            if (result.isConfirmed && totalPay> 0) {
              swalWithBootstrapButtons.fire({
                title: "Payment Confirmed!",
                text: `You have payed ${totalPay}$`,
                icon: "success"
              });
              setCartItems(getDefaultCart(all_product))
              setTotalPay(0);
              
            }
            else if(result.isConfirmed && totalPay=== 0){
                swalWithBootstrapButtons.fire({
                    title: "Your Cart is Empty!",
                    icon: "info"
                  });
            }
             else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your payment has been cancelled!",
                icon: "error"
              });
            }
          });
    }

    return (
        <>
        <div className='cart-items'>

                {all_product.map((e,i)=>{
                    if(cartItems[e.id]> 0){
                        
                        return (
                            <CartItemCard key={i} image ={all_product[i].image} title= {all_product[i].name} 
                            price = {all_product[i].new_price} quantity = {cartItems[e.id]}
                            totalPrice = {all_product[i].new_price* cartItems[e.id]}
                            id = {e.id}
                            >
                            </CartItemCard>
                     
                        )
                        
                    }
                })}
  

        </div>

            
        <div className='cart-total'>
            <div>
            <h4>SubTotal</h4>
            <p>{totalPay}$</p>
            </div>
            <hr />
            <div>
                <h4>Shipping Fee</h4>
                <p>Free</p>
            </div>
            <hr />

            <div>
                <h3>Total</h3>
                <p>{totalPay}$</p>
            </div>
            <input type="button" value="Checkout"  onClick={handlePayClick}/>
  
            </div>
        </>
    );
}

export default CartItems;
