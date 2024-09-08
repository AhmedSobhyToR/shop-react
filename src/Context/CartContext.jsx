import React, { createContext, useState, useMemo } from 'react';
import all_product from '../Components/Assests/all_product'

export const CartContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index <= all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
};

const CartContextProvider = ({ all_product, children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart(all_product));

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };
    const deleteFromCart= (itemId)=>{
        setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
    }

    const getTotalCartItems = useMemo(() => {
        let totalCartItems = 0;
        for (var i in cartItems) {
            if (cartItems[i] > 0) {
                totalCartItems += cartItems[i];
            }
        }
        return totalCartItems;
    }, [cartItems]);

    const contextValue = { cartItems, setCartItems, addToCart, removeFromCart,deleteFromCart, getTotalCartItems, getDefaultCart };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
