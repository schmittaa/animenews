import { ADD_NEWS, GET_NEW, GET_NEWS,SHOW_ALL,TOGGLE_FALSE_NEWS, TOGGLE_TRUE_NEWS } from "../types";

const initialstate = {
    news : [],
    onenew : null,
    loading: true,
    editnews : false,
    showAll : false
   }
  
function newsReducer(state = initialstate, { type, payload }) {
  switch (type) {
    case  ADD_NEWS :
       return {...state, onenew:payload.onenew, loading:false}
       
    case GET_NEWS:
      return {
        ...state,
        news : payload,
        loading: false
      };  
    case GET_NEW :
      return{
        ...state,
        onenew :payload,
        loading : false   
      };
    case TOGGLE_TRUE_NEWS:
        return {...state, editnews: true};

    case TOGGLE_FALSE_NEWS:
        return {...state,  editnews: false};
    case SHOW_ALL:
          return {...state, showAll: true};

    default:
        return {state};
  }
}

export default  newsReducer;
