import axios from "axios"
import { FAIL, GET_USER, GET_USERS } from "../types"


export const getUsers = () => async(dispatch)=>{
  const config = {
    headers:{
        authorization : localStorage.getItem('token')
    }
}
    try {
        const res = await axios.get('/animeapp/user/allUsers', config)
        console.log(res.data)
       dispatch({
            type:GET_USERS, 
           payload :res.data.users
        })
    } catch (error) {
        console.log(error)
    }
    }

//remove user
export const removeUser =(id)=> async(dispatch)=>{
  const config = {
    headers:{
        authorization : localStorage.getItem('token')
    }
}
    try {
    await axios.delete(`/animeapp/user/deleteUser/${id}`, config)
        dispatch(getUsers())
    } catch (error) {
        console.log("Can't remove user",error)
    }
    }

//update


  export const getuser = (id) => async (dispatch) => {
    const config = {
      headers:{
          authorization : localStorage.getItem('token')
      }
  }
    try {
    const res = await axios.get(`/animeapp/user/oneUser/${id}`, config);
    dispatch({
      type: GET_USER,
      payload: res.data.user,
    });
  } catch (error) {
    console.log("can't get one contact");
  }
};

//upadate user

export const updateUser =(id, dataObj)=> async(dispatch)=>{
  const config = {
    headers:{
        authorization : localStorage.getItem('token')
    }
}
  try {
  await axios.put(`/animeapp/user/updateUser/${id}`, dataObj, config)
  } catch (error) {
    console.log("update user ko")
      dispatch({
        type : FAIL
           });
        }
  }

  //update role
export const updateRole =(id, dataObj)=> async(dispatch)=>{
    const config = {
      headers:{
          authorization : localStorage.getItem('token')
      }
  }
    try {
    await axios.put(`/animeapp/user/updateRole/${id}`, dataObj, config)
    } catch (error) {
      console.log("update role ko")
        dispatch({
          type : FAIL
             });
          }
    }

//update favoris
export const updateFavoris =(id)=> async(dispatch)=>{
  const config = {
    headers:{
        authorization : localStorage.getItem('token')
    }
}
  try {
  await axios.put(`/animeapp/user/updateFavoris/${id}`, {},config)
  } catch (error) {
    console.log("update favoris ko")
      dispatch({
        type : FAIL
           });
        }
  }