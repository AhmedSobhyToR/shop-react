import React from 'react';
import './Main.css'
import handIcon from '../Assests/hand_icon.png'
import arrow from '../Assests/arrow.png'
import hero_img from '../Assests/hero_image.png'
const Main = () => {
    return (
        <div className='main-section'>
            <div className='main-right'>
                <h2>New Arrivals Only</h2>
                <div className='header-hand'>
                <h1>new</h1>
                <img src={handIcon} alt="handIcon" />
                </div>
               <h1>Collections</h1>
               <h1>for everyone</h1>
              <button>Latest Collection <img src={arrow} alt=''></img></button>
   
            </div>



        </div>
    );
}

export default Main;
