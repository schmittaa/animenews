import { REGISTER } from "../types";

const initialState = {
  auth:false,
  user :null,
  loading:true
}

const authReducer = (state = initialState, { type, payload }) => {
switch(type){
 case REGISTER :
  localStorage.setItem('token', payload.token);
   return {...state, user:payload.user, auth:true, loading:false}

   default: return state; 
}

}
export default authReducer; 
