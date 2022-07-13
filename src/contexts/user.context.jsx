import {createContext, useState, useEffect} from 'react';
import {onAuthStateChangedListener, signOutUser, createUserDocumentFromAuth} from '../utils/firebase/firebase.utils'

export const UserContext = createContext({
    // set initial values for the context
    currentUser: null,
    setCurrentUser: () => null,

});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

 
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(user => {
            // if a user comes through (old or new) after the createUserDocumentFromAuth
            if(user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, [])



    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}