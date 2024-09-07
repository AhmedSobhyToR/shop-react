import React from 'react';
import './PageSlider.css'
const PageSlider = ({ pageNumber, onPageChange }) => {
    function handlePageSlider(){
        onPageChange(pageNumber);


    }
    return ( 
        <input  onClick={() => {handlePageSlider()} } type="button" className='page-slider-btn' value={pageNumber}  />
    );
}

export default PageSlider;
