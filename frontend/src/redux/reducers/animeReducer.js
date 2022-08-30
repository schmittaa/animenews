import { ADD_ANIME, GET_ANIME, GET_ANIMES, TOGGLE_FALSE_ANIME, TOGGLE_TRUE_ANIME } from "../types";

const initialstate = {
    animes : [],
    anime : null,
    loading: true,
    edit : false
   }
  
function animeReducer(state = initialstate, { type, payload }) {
  switch (type) {
    case  ADD_ANIME :
       return {...state, anime:payload.anime, loading:false}
    case GET_ANIMES:
      return {
        ...state,
        animes : payload,
        loading: false
      };  
    case GET_ANIME :
      return{
        ...state,
        anime :payload,
        loading : false   
      };
    case TOGGLE_TRUE_ANIME:
        return {
          ...state,
          edit: true,
        };
    case TOGGLE_FALSE_ANIME:
        return {
          ...state,
          edit: false,
        };
  
    default:
        return {state};
  }
}

export default  animeReducer;
