import axios from 'axios';
import {REGISTER, FAIL, LOGIN, LOGOUT, CURRENT} from '../types';
import { toast } from 'react-toastify';

export const  userRegister = (data,navigate)=> async(dispatch)=> {
    try {
        const res = await axios.post("/animeapp/register", data)
        console.log(res.data)
        dispatch({
            type : REGISTER,
            payload : res.data
        });
      //  dispatch(setAlert(res.data.msg, "success"));
      toast.success(res.data.msg)

      navigate("/profile")
    } catch (error) {
        dispatch({
            type : FAIL
               });
               error.response.data.errors.forEach(err => toast.warning(err.msg))
            }
}

export const  userLogin = (data,navigate)=> async(dispatch)=> {
    try {
        const res = await axios.post("/animeapp/login", data)
        console.log(res.data)
        dispatch({
            type : LOGIN,
            payload : res.data
        });
    } catch (error) {
        dispatch({
            type : FAIL
               });
       // error.response.data.errors.forEach(err => dispatch(setAlert(err.msg, "danger")));
       error.response.data.errors.forEach(err => toast.warning(err.msg))
    }
}

export const logout =() =>{
    return {
        type : LOGOUT, 
    }
} 

export const currentUser = () => async (dispatch) =>{
    const config = {
        headers:{
            authorization : localStorage.getItem('token')
        }
    }
    try {
            const res = await axios.get('/animeapp/currentUser', config)
            dispatch({
                type:CURRENT,
                payload : res.data
            })

    } catch (error) {
        dispatch({
            type : FAIL
               });
               error.response.data.errors.forEach(err => toast.error(err.msg))

    }
}

