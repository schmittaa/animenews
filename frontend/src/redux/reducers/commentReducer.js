
import { ADD_COMMENT, GET_COMMENT, GET_COMMENTS } from '../types';


const initialstate = {
    comments : [],
    comment : null,
    loading: true,
    editcomment : false
   }


function commentReducer(state = initialstate, { type, payload }) {
    switch (type) {
        case  ADD_COMMENT :
           return {...state, comment:payload.comment, loading:false}
           
        case GET_COMMENTS:
          return {
            ...state,
            comments : payload,
            loading: false
          };  
        case GET_COMMENT :
          return{
            ...state,
            comment :payload,
            loading : false   
          };
    
        default:
            return {state};
      }
    }


export default commentReducer