import * as C from "../constants/action-types"




export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
const MY_API_KEY = 'c39a26d9c12f48dba2a5c00e35684ecc';

export const getChannel = channel => ({
  type: SELECT_CHANNEL,
  channel,
});
export const requestPosts = () => ({
  type: REQUEST_POSTS,
});
export const receivedPosts = json => ({
  type: RECEIVE_POSTS,
  json: json.artists,
});


export function fetchPosts(channel) {
  return function (dispatch) {
    dispatch(requestPosts());
    return fetch("https://theaudiodb.com/api/v1/json/1/search.php?s=coldplay")
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      )
      .then((json) => {
        dispatch(receivedPosts(json));
      },
      );
  };
}



export function addArticle(payload) {

  return { type: C.ADD_ARTICLE, payload }

};

export function getData() {
  return function (dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "C.DATA_LOADED", payload: json });
      });
  };
}
export function fetchProductsPending() {
  return {
    type: C.FETCH_PRODUCTS_PENDING

  }
}
export function fetchProductsSuccess(products) {
  return {
    type: C.FETCH_PRODUCTS_SUCCESS,
    products: products
  }
}

export function fetchProductsError(error) {
  return {
    type: C.FETCH_PRODUCTS_ERROR,
    error: error
  }
}