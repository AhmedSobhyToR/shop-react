import React, { useState } from "react";
import emptyStarIcon from '../Assests/star_dull_icon.png'
import fullStarIcon from '../Assests/star_icon.png'
import './ProductDescription.css'
const ProductDescription = () => {
  const [show, setShow] = useState(0);
  function showDescription() {
    setShow(0);
  }
  function showReviews() {
    setShow(1);
  }
  return (
    <div className="product-description">
      <div className="product-Description-Header">
        <input onClick={showDescription} type="button" value="Description" />
        <input onClick={showReviews} type="button" value="Reviews" />
      </div>
      <div className="product-Description-Body">

        {show ===0 && (
          <div>
            <p>
            【Premium Fabric】This mens lightweight shirt jacket is made from
            high quality cotton fabric, designed to provide you ultimate comfort
            while keeping you looking effortlessly stylish. 
            </p>

            
            <p>【Classic Design】This mens button down shacket features classic spread
            collar, 1 chest pocket, button closure, long sleeve, curved hem,
            super stitching. Create a casual and stylish look for you.
        </p>
        <p>
        【Collocation】The versatile design allows you to wear this casaul
            shirt as a standalone piece or layered over your favorite
            t-shirt.Whether you're dressing for a casual day out or a more
            polished look, this shirt jacket has got you covered. 
        </p>
        <p>
        【Multiple
            Occasions】Whether you're heading to work, out for a casual day, or
            enjoying an evening out, this lightweight shacket is the perfect
            choice. Dress it up or down to suit any occasion.
        </p>
            
          </div>
        )}

        {
          show  ===1 && (
            <div> <h2>Review total number is 150</h2> 
            <div className="Total Reviews">
            <div>
                    <img src={fullStarIcon} alt="" />  
                    <img src={fullStarIcon} alt="" /> 
                    <img src={fullStarIcon} alt="" /> 
                    <img src={fullStarIcon} alt="" />  
                    <img src={fullStarIcon} alt="" />   
                    <span>80</span>
                    </div>

                    <div>
                    <img src={fullStarIcon} alt="" />  
                    <img src={fullStarIcon} alt="" /> 
                    <img src={fullStarIcon} alt="" /> 
                    <img src={fullStarIcon} alt="" />  
                    <img src={emptyStarIcon} alt="" />  
                    <span>30</span>
                    </div>

                    <div>
                    <img src={fullStarIcon} alt="" />  
                    <img src={fullStarIcon} alt="" /> 
                    <img src={fullStarIcon} alt="" /> 
                    <img src={emptyStarIcon} alt="" /> 
                    <img src={emptyStarIcon} alt="" />  
                    <span>30</span>
                    </div>

                    <div>
                    <img src={fullStarIcon} alt="" />  
                    <img src={fullStarIcon} alt="" /> 
                    <img src={emptyStarIcon} alt="" /> 
                    <img src={emptyStarIcon} alt="" />  
                    <img src={emptyStarIcon} alt="" />  
                    <span>8</span>
                    </div>

                    <div>
                    <img src={fullStarIcon} alt="" />  
                    <img src={emptyStarIcon} alt="" /> 
                    <img src={emptyStarIcon} alt="" /> 
                    <img src={emptyStarIcon} alt="" /> 
                    <img src={emptyStarIcon} alt="" />  
                    <span>2</span>
                    </div>
            </div>
                   

                 </div>
  
          )  
        }
      </div>
    </div>
  );
};

export default ProductDescription;
