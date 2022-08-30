import axios from "axios"
import { ADD_ANIME, FAIL, GET_ANIME, GET_ANIMES,  TOGGLE_FALSE_ANIME,  TOGGLE_TRUE_ANIME} from "../types"
import { toast } from 'react-toastify';

export const getAnimes = () => async(dispatch)=>{
    try {
        const res = await axios.get('/animeapp/anime/allAnime')
        console.log(res.data)
       dispatch({
            type:GET_ANIMES, 
           payload :res.data.animes
        })
    } catch (error) {
        console.log("Can't get animes")
    }
    }
//add
export const  addAnime = (data,navigate)=> async(dispatch)=> {
  const config = {
    headers:{
        authorization : localStorage.getItem('token')
    }
}
    try {
        const res = await axios.post("/animeapp/anime/addAnime", data, config)
        console.log(res.data)
        dispatch({
            type : ADD_ANIME,
            payload : res.data
        });
      toast.success(res.data.msg)
      
    } catch (error) {
        dispatch({
            type : FAIL
               });
            }
}

//remove anime
export const removeAnime =(id)=> async(dispatch)=>{
  const config = {
    headers:{
        authorization : localStorage.getItem('token')
    }
}
    try {
    await axios.delete(`/animeapp/anime/deleteAnime/${id}`, config)
    dispatch(getAnimes())
    } catch (error) {
        console.log("Can't remove anime",error)
        dispatch({
          type : FAIL
             });
          }
    }

export const getAnime = (id) => async (dispatch) => {
  const config = {
    headers:{
        authorization : localStorage.getItem('token')
    }
}   
   try {
        const res = await axios.get(`/animeapp/anime/oneAnime/${id}`, config);
        dispatch({
          type: GET_ANIME,
          payload: res.data.anime,
        });
      } catch (error) {
        console.log(error);
      }
    };

    //update

    export const toggleTrueAnime = () => {
      return {
        type: TOGGLE_TRUE_ANIME,
      };
    };
    export const toggleFalseAnime = () => {
      return {
        type: TOGGLE_FALSE_ANIME,
      };
    };
  
    export const updateAnime =(id, dataObj)=> async(dispatch)=>{
      const config = {
        headers:{
            authorization : localStorage.getItem('token')
        }
    }
      try {
      await axios.put(`/animeapp/anime/updateAnime/${id}`, dataObj, config)
      } catch (error) {
        console.log("update anime ko")
          dispatch({
            type : FAIL
               });
               error.response.data.errors.forEach(err => toast.warning(err.msg))
            }
      }