import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunkMiddleware from "redux-thunk";
import ParksReducer from './Parks/ParksReducer';

const Reducer = combineReducers({
    parksState: ParksReducer
});

const loggerMiddleware = createLogger();

const Store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware)));

export default Store;