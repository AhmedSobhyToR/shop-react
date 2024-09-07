import React from 'react';
import './Popular.css'
import all_product from '../Assests/all_product'
import Item from '../Item/Item'
const Popular = () => {
    return (
        <div className='popular'>
            <h1>Trending Today</h1>
            <hr />
            <div className="popular-item">
        {all_product.map((item, i)=> {
            if(i%9 === 0){
                return <Item key={i} id={item.id} name= {item.name} image={item.image}
                newPrice = {item.new_price} oldPrice = {item.old_price}  ></Item>
            }
        
        })}
            </div>
        </div>
    );
}

export default Popular;
