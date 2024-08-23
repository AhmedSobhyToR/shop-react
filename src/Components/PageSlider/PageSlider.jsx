import React from 'react';
import './PageSlider.css'
const PageSlider = ({ pageNumber, onPageChange }) => {

    return ( 
        <input  onClick={() => { onPageChange(pageNumber)} }type="button" className='page-slider-btn' value={pageNumber}  />
    );
}

export default PageSlider;
