import {createContext, useReducer} from 'react';

import {createAction} from '../utils/reducer/reducer.utils'

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

export const CART_ACTION_TYPES = {
   SET_CART_ITEMS: "SET_CART_ITEMS",
   SET_IS_CART_OPEN: "SET_IS_CART_OPEN"
}

const INITIAL_STATE = {
    open: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                open: payload
            }
        default:
            throw new Error(`Unhandled type of ${type} in useReducer`);
    }
}


export const CartContextProvider = ({children}) => {

    // const [open, setOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    // const [cartCount, setCartCount] = useState(0);
    // const [cartTotal, setCartTotal] = useState(0);

    const [{open, cartItems, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);


    // useEffect(() => {
    //     const newCartCount = cartItems.reduce((total, item) => {
    //         total += item.quantity;
    //         return total;
    //     }, 0)
    //     setCartCount(newCartCount)
    // }, [cartItems])

    // useEffect(() => {
    //     const newPriceCount = cartItems.reduce((total, item) => {
    //         total += item.price * item.quantity;
    //         return total;
    //     }, 0)
    //     setCartTotal(newPriceCount)
    // }, [cartItems])

    const updateCartItemsReducer = (newCartItems) => {

        const newCartCount = newCartItems.reduce((total, item) => {
            total += item.quantity;
            return total;
        }, 0)

        const newPriceCount = newCartItems.reduce((total, item) => {
            total += item.price * item.quantity;
            return total;
        }, 0)

        dispatch(
            createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
                cartItems: newCartItems, 
                cartTotal: newPriceCount, 
                cartCount: newCartCount
            }));

        
        // dispatch new action with payload = {newCartItems, newCartTotal, newCartCount}

    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    }

    const removeItemFromCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const clearItemFromCart = (cartItemToClear) => {
        const newCartItems = clearCartItem(cartItems, cartItemToClear);
        updateCartItemsReducer(newCartItems);
    }

    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
    };

    const value = {open, addItemToCart, setIsCartOpen, removeItemFromCart, cartItems, cartCount, cartTotal, clearItemFromCart}


    return(<CartContext.Provider value={value}>{children}</CartContext.Provider>)
    

}

