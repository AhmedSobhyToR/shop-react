import React, { useContext, useState } from 'react';
import './Navbar.css'
import logo from '../Assests/moonnoback.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const { getTotalCartItems } = useContext(CartContext);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar'>
            <div className='logo'>
                <Link to="/"><img src={logo} alt='logo' /></Link>
                <Link to="/"><p>MoonShop</p> </Link>
            </div>
            
            <div className='hamburger' onClick={toggleMenu}>
                &#9776; 
            </div>

            <ul className={isMenuOpen ? 'nav-links open' : 'nav-links closed'}>
                <li onClick={() => { setMenu("shop"); setIsMenuOpen(false); }}>
                    <Link to="/">Home</Link> {menu === 'shop' ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("shirts"); setIsMenuOpen(false); }}>
                    <Link to="/shirts">T-Shirts</Link> {menu === 'shirts' ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("jeans"); setIsMenuOpen(false); }}>
                    <Link to="/jeans">Jeans</Link> {menu === 'jeans' ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("shoes"); setIsMenuOpen(false); }}>
                    <Link to="/shoes">Shoes</Link> {menu === 'shoes' ? <hr /> : <></>}
                </li>
            </ul>

            <div className='nav-login-cart'>
            <Link to="/cart"><img src={cart_icon} alt="cart_icon" onClick={() => window.scrollTo(0, 0)} /></Link>
            <div className='cart-icon-count'>{getTotalCartItems}</div>
                <Link to="/login"><input type="button" value="Login" onClick={() => window.scrollTo(0, 0)} /></Link>

            </div>
        </div>
    );
};

export default Navbar;
