import React , {useContext} from 'react';
import './CartItemCard.css'
import remove_icon from '../Assests/remove.png'
import { CartContext } from '../../Context/CartContext';
const CartItemCard = (props) => {
    const {cartItems,addToCart, removeFromCart, deleteFromCart} = useContext(CartContext)

    return (
        <div className='cart-item-card'>
            <div className='cart-item-card-left'>
                <img src={props.image} alt="" />
            </div>

            <div className='cart-item-card-right'>
                <div className='card-right-header'>
                    <p>{props.title}</p>
                    <p>{props.price}$</p>
                </div>
                <div className="card-right-body">
                    <div className='card-right-body-buttons'>
                        <div className='counter-num' onClick={()=>{removeFromCart(props.id)}}>
                            <p> -</p>
                           
                        </div>
                        <div className='card-quantity'>
                            {props.quantity}
                        </div>
                        <div className='counter-num' onClick={()=>{addToCart(props.id)}}>
                            <p>+</p>
                                
                        </div>
                    </div>

                    <div className='card-right-body-removeicon'>
                            <img src={remove_icon} alt="" onClick={()=>{deleteFromCart(props.id)}} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItemCard;
