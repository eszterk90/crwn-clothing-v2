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

export const CartContext = createContext({
    open: false,
    setOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
});

export const CartContextProvider = ({children}) => {

    const [open, setOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, item) => {
            total += item.quantity;
            return total;
        }, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const toggleIsCartOpen = () => {
        setOpen(!open);
    }

    const value = {open, setOpen, toggleIsCartOpen, addItemToCart, cartItems, cartCount}


    return(<CartContext.Provider value={value}>{children}</CartContext.Provider>)
    

}

