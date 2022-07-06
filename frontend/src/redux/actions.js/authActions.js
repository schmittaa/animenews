import axios from 'axios';
import {REGISTER, FAIL} from '../types';

export const  userRegister = data => async(dispatch)=> {
    try {
        const res = await axios.post("/animeapp/register", data)
        dispatch({
            type : REGISTER,
            payload : res.data
        });
    } catch (error) {
        dispatch({
            type : FAIL
                })
    }
}