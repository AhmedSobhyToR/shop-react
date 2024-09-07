import React from 'react';
import './Collections.css'
import Item from '../Item/Item'
import all_product from '../Assests/all_product'
const Collections = () => {
    return (
        <div className='Collections'>
                <h1>New Collections</h1>
                <hr />
                <div className='Collection-items'>
                    { all_product.map((item,i)=>{
                        if(i%9 === 0){
                            return <Item key={i} id={item.id} name ={item.name} image={item.image} newPrice = {item.new_price} oldPrice = {item.old_price}/>

                        }

                    })

                    }
                </div>
        </div>
    );
}

export default Collections;
