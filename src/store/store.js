import {compose, createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger';
import {rootReducer} from './root-reducer';

// middlewares are little library helpers that run before an action hits the reducer;
// logger allows us to see what the state looks like before the action is dispatched, what the action is and how the state looks after the action --> 'action log'

// middlewares are chained curry functions

// const loggerMiddleware = (store) => (next) => (action) => {
//     if(!action.type) {
//         return next(action);
//     }
//     console.log('type: ', action.type);
//     console.log('payload: ', action.payload);
//     console.log('currentState: ', store.getState());

//     next(action);
//     console.log('next state: ', store.getState())
// }

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);