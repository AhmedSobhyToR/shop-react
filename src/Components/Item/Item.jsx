import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <div className='item'>
     
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
            <h3>{props.name}</h3>
     
            <div className='item-price'>
                <p>{props.newPrice}$</p>
                <p>{props.oldPrice}$</p>
            </div>
  


        </div>
    );
}

export default Item;
