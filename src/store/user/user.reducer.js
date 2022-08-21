export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const INITIAL_STATE = {
    currentUser: null
}

// give an initial value to the state

export const userReducer = (state = INITIAL_STATE, action) => {
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
            return state;
    }
}


