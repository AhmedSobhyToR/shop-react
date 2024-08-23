import React from 'react';
import './Collections.css'
import Item from '../Item/Item'
import new_collections from '../Assests/new_collections'
const Collections = () => {
    return (
        <div className='Collections'>
                <h1>New Collections</h1>
                <hr />
                <div className='Collection-items'>
                    { new_collections.map((item,i)=>{
                        return <Item key={i} id={item.id} name ={item.name} image={item.image} newPrice = {item.new_price} oldPrice = {item.old_price}/>

                    })

                    }
                </div>
        </div>
    );
}

export default Collections;
