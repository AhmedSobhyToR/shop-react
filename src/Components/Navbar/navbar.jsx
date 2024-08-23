import React, { useContext, useState } from 'react';
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {
    const [menu,setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src = {logo} alt='logo'/>
                <p>Ahmed</p>
         </div>
         
            <ul>
                <li onClick={()=>{setMenu("shop")}}> <Link to="/">Main</Link>  {menu === 'shop'?<hr/>: <></>}</li>
                <li onClick={()=>{setMenu("men")}}><Link to="/men">Casual</Link> {menu === 'men'?<hr/>: <></>}</li>
                <li onClick={()=>{setMenu("women")}}><Link to="/women">Jackets</Link> {menu === 'women'?<hr/>: <></>}</li>
                <li onClick={()=>{setMenu("kids")}}> <Link to="/kids">Kids</Link> {menu === 'kids'?<hr/>: <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to="/login"> <input type="button" value="Login"/></Link>
        <Link to="/cart"><img src={cart_icon} alt="cart_icon" /></Link>
            
                <div className='cart-icon-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
