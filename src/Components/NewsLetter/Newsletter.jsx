import React from 'react';
import './Newsletter.css'
const Newsletter = () => {
    return (
        <div className='newsletter'>
            <div className='newsletter-banner'>
                <h2>Get Exclusive Offers On Your Email</h2>
                <p>Subsribe to our newsletter and stay updated</p>
                <div className='email-subs'>
                    <input type="email" placeholder='Your e-mail' />
                    <input type="button" value="Subscribe" />
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
