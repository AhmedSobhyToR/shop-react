import React from 'react';
import './Popular.css'
import data_product from '../Assests/data'
import Item from '../Item/Item'
const Popular = () => {
    return (
        <div className='popular'>
            <h1>Trending Today</h1>
            <hr />
            <div className="popular-item">
        {data_product.map((item, i)=> {
                return <Item key={i} id={item.id} name= {item.name} image={item.image}
                newPrice = {item.new_price} oldPrice = {item.old_price}  ></Item>
        })}
            </div>
        </div>
    );
}

export default Popular;
