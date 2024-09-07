import React, { useContext, useState } from 'react';
import './Navbar.css'
import logo from '../Assests/moonnoback.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {
    const [menu,setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)
    return (
        <div className='navbar'>
            <div className='logo'>
          <Link to="/"> <img src = {logo} alt='logo'/></Link> 
          <Link to="/"><p>MoonShop</p> </Link> 
               
         </div>
         
            <ul>
                <li onClick={()=>{setMenu("shop")}}> <Link to="/">Main</Link>  {menu === 'shop'?<hr/>: <></>}</li>
                <li onClick={()=>{setMenu("shirts")}}><Link to="/shirts">T-Shirts</Link> {menu === 'shirts'?<hr/>: <></>}</li>
                <li onClick={()=>{setMenu("jeans")}}><Link to="/jeans">Jeans</Link> {menu === 'jeans'?<hr/>: <></>}</li>
                <li onClick={()=>{setMenu("shoes")}}> <Link to="/shoes">Shoes</Link> {menu === 'shoes'?<hr/>: <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to="/login"> <input type="button" value="Login" onClick={()=> window.scrollTo(0, 0)}/></Link>
        <Link to="/cart"><img src={cart_icon} alt="cart_icon" /></Link>
            
                <div className='cart-icon-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
