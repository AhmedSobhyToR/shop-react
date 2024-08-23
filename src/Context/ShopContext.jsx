import React , {createContext, useState} from 'react';
import all_product from '../Components/Assests/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index <= all_product.length; index++) {
         cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props)=>{
    const [cartItems,setCartItems] = useState(getDefaultCart())
    const addToCart = (itemId)=>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId]+1}) )
    
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId]-1}) )
    }
 
    const getTotalCartItems = ()=>{

        let totalCartItems = 0;
        for(var i in cartItems){
            if(cartItems[i]> 0){
                totalCartItems += cartItems[i];
            }
        }
        return totalCartItems;
        
    }

    const contextValue = {all_product,cartItems, addToCart, removeFromCart,getTotalCartItems};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
