
import {FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} from '../constants/action-types';

import { SELECT_CHANNEL, REQUEST_POSTS, RECEIVE_POSTS } from '../actions';






const reducer = (state = {}, action) => {
    switch (action.type) {
      case SELECT_CHANNEL:
         return { ...state, channel: action.channel };
      case REQUEST_POSTS:
         return { ...state, loading: true };
      case RECEIVE_POSTS:
         return { ...state, json: action.json, loading: false };
      default:
         return state;
    }
  };
  export default reducer;
































const initialState = {
    pending: false,
    products: [],
    error: null
}

export  function productsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.payload
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;