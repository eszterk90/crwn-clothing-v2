import {createContext, useEffect, useReducer} from 'react';
import {onAuthStateChangedListener, signOutUser, createUserDocumentFromAuth} from '../utils/firebase/firebase.utils'
import {createAction} from '../utils/reducer/reducer.utils'

export const UserContext = createContext({
    // set initial values for the context
    currentUser: null,
    setCurrentUser: () => null,

});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const userReducer = (state, action) => {
    console.log('dispatched');
    console.log(action);
    const {type, payload} = action;

    switch(type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: payload
            }
        default: 
            throw new Error(`Unhandled type of ${type} in useReducer`);
    }
}


const INITIAL_STATE = {
    currentUser: null
}
export const UserProvider = ({children}) => {
    // const [currentUser, setCurrentUser] = useState(null);
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
    console.log(currentUser);

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
    }

    

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

/*

const userReducer = (state, action) => {
    return {
        currentUser: 
    }
}

*/