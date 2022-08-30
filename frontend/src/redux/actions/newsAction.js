import axios from "axios"
import { ADD_NEWS, FAIL, GET_NEW, GET_NEWS, SHOW_ALL, TOGGLE_FALSE_NEWS, TOGGLE_TRUE_NEWS } from "../types"
import { toast } from 'react-toastify';


export const getNews = () => async(dispatch)=>{
 
    try {
        const res = await axios.get('/animeapp/news/allNews')
       dispatch({
            type:GET_NEWS, 
           payload :res.data.news
        })
    } catch (error) {
        console.log("Can't get news")
    }
    }

//add
export const  addNews = (data,navigate)=> async(dispatch)=> {
  const config = {
        headers:{
            authorization : localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.post("/animeapp/news/addNews", data, config)
        dispatch({
            type : ADD_NEWS,
            payload : res.data
        });
      toast.success(res.data.msg)
      
    } catch (error) {
        dispatch({
            type : FAIL
               });
               error.response.data.errors.forEach(err => toast.warning(err.msg))
            }
}



//remove news
export const removeNews =(id)=> async(dispatch)=>{
  const config = {
    headers:{
        authorization : localStorage.getItem('token')
    }
}    
try {
    await axios.delete(`/animeapp/news/deleteNews/${id}`, config)
    dispatch(getNews())

    } catch (error) {
        console.log("Can't remove news",error)
        dispatch({
          type : FAIL
             });
             error.response.data.errors.forEach(err => toast.warning(err.msg))
          
    }
    }


//update
export const toggleTrueNews = () => {
    return {
      type: TOGGLE_TRUE_NEWS,
    };
  };
  export const toggleFalseNews = () => {
    return {
      type: TOGGLE_FALSE_NEWS,
    };
  };

  //getone 
export const getNew = (id) => async (dispatch) => {
  const config = {
    headers:{
        authorization : localStorage.getItem('token')
    }
}
  try {
    const res = await axios.get(`/animeapp/news/oneNews/${id}`, config);
    dispatch({
      type: GET_NEW,
      payload: res.data
    });
} catch (error) {
console.log(error) 
}
};

export const showAll = () => {
  return {
    type: SHOW_ALL,
  };
};

export const updatenews =(id, dataObj)=> async(dispatch)=>{
      const config = {
        headers:{
            authorization : localStorage.getItem('token')
        }
    }
    try {
    await axios.put(`/animeapp/news/updateNews/${id}`, dataObj, config)

    } catch (error) {
      console.log("update news ko")
        dispatch({
          type : FAIL
             });
             error.response.data.errors.forEach(err => toast.warning(err.msg))
          
    }
    }