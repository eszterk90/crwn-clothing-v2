import {createContext, useState, useEffect} from 'react';

const addCartItem = (cartItems, productToAdd) => {
   const filteredItem = cartItems.find(item => item.id === productToAdd.id);
   if(filteredItem) {
        return cartItems.map(item => item.id === productToAdd.id ? {...item, quantity: item.quantity +1} : item)
    }
    else {
        return [...cartItems, {...productToAdd, quantity: 1}]
    }
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToRemove.id);
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== cartItemToRemove.id);
    }
    else {
        return cartItems.map(item => item.id === cartItemToRemove.id ? {...item, quantity: item.quantity -1} : item)
    }
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((item) => item.id !== cartItemToClear.id);
}


export const CartContext = createContext({
    open: false,
    setOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    deleteItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
});

export const CartContextProvider = ({children}) => {

    const [open, setOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, item) => {
            total += item.quantity;
            return total;
        }, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newPriceCount = cartItems.reduce((total, item) => {
            total += item.price * item.quantity;
            return total;
        }, 0)
        setCartTotal(newPriceCount)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));

    }

    const toggleIsCartOpen = () => {
        setOpen(!open);
    }

    const value = {open, setOpen, toggleIsCartOpen, addItemToCart, removeItemFromCart, cartItems, setCartItems, cartCount, setCartCount, cartTotal, clearItemFromCart}


    return(<CartContext.Provider value={value}>{children}</CartContext.Provider>)
    

}

