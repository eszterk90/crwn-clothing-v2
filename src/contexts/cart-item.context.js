import {createContext, useState} from 'react';

export const CartContext = createContext({
    open: false,
    setOpen: () => {}
});

export const CartContextProvider = ({children}) => {

    const [open, setOpen] = useState(false);

    const toggleIsCartOpen = () => {
        setOpen(!open);
    }

    const value = {open, setOpen, toggleIsCartOpen}


    return(<CartContext.Provider value={value}>{children}</CartContext.Provider>)
    

}

