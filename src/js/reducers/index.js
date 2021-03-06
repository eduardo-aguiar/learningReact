import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types"




const initialState = {
    articles: [],
    remoteArticles: []
  };

  function rootReducer(state = initialState, action) {
      if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
          });
      } else if (action.type === FOUND_BAD_WORD) {
            alert("Conteúdo")
      } else if (action.type === "DATA_LOADED") {
          return Object.assign({}, state, {

            remoteArticles: state.remoteArticles.concat(action.payload)
          });
      }

    return state;

  };
  

  export default rootReducer;