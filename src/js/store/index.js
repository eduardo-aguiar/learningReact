import { createStore, applyMiddleware, compose } from "redux";
import productsReducer from "../reducers/api-redux";
import fetchProducts  from "../middleware/fetchProducts";
import { logger } from 'redux-logger'
import thunk from "redux-thunk";


const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    productsReducer , applyMiddleware(thunk, logger)
    );






export default store;


