import React, { useState } from 'react';
import './Footer.css'
import logo from '../Assests/moonnoback.png'
import igIcon from '../Assests/instagram_icon.png'
import pinIcon from '../Assests/pintester_icon.png'
import wspIcon from '../Assests/whatsapp_icon.png'



const Footer = () => {

    return (
        <div className='Footer'>
            <div className='footer-header'>
                <a href="#"> <img src={logo} alt="" /></a>
               <a href="#"><h2>MoonShop</h2></a> 
            </div>

                <ul className='footer-nav'>
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

            <div className='footer-socials'>
                <img src={igIcon}  alt="" />
                <img src={pinIcon} alt="" />
                <img src={wspIcon} alt="" />
            </div>
            <hr />
            <div className="footer-end">
            <p>This Website is Made & Powered By <span>Ahmed Sobhy</span></p>
            </div>
          
        </div>
    );
}

export default Footer;
