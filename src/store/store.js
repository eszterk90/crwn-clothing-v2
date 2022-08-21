import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {rootReducer} from './root-reducer';

// middlewares are little library helpers that run before an action hits the reducer;
// logger allows us to see what the state looks like before the action is dispatched, what the action is and how the state looks after the action --> 'action log'
const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);