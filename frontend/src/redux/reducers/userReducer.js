import { GET_USER, GET_USERS } from "../types";

const initialstate = {
    users: [],
    user: null,
    loading: true,
    edit : false
   }
  

function userReducer(state = initialstate, { type, payload }) {
  switch (type) {
    case GET_USERS:
      return { 
        ...state,
        users: payload,
        loading: false
      };  
    case GET_USER :
      return{
        ...state,
        user :payload,
        loading : false   
      };
  
    default:
        return {state};
  }
}

export default userReducer