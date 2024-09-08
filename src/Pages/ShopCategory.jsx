import React, { useContext } from 'react';
import './CSS/ShopCategory.css'
import { ProductContext } from '../Context/ProductContext';
import Item from '../Components/Item/Item';


const ShopCategory = (props) => {
    const {all_product} = useContext(ProductContext)
    return (
        <div className='shop-category'>
            <div className='shop-category-banner'>
              <img src={props.banner} alt="banner" />
            </div>
       
            <div className='shop-category-items'>
                {all_product.map((product,i)=>{
                    if(product.category === props.category){
                        return(
                            <Item key={i} id={product.id}  image={product.image} name= {product.name} oldPrice = {product.old_price} newPrice = {product.new_price}></Item>
                        )
                    }
                    else{
                        return null;
                    }
                  
                })}
                
            </div>
            <div>
            <input type="button" value="Explore More" className='shop-category-explore-btn' />
            </div>
              
        </div>
    );
}

export default ShopCategory;
