import axios from "axios"
import { ADD_COMMENT, FAIL, GET_COMMENTS } from "../types";


export const getComments = (id) => async (dispatch) => {

    try {
        const res = await axios.get(`/animeapp/comment/allComment/${id}`)
        console.log(res.data)
        dispatch({
            type: GET_COMMENTS,
            payload: res.data.comments
        })
    } catch (error) {
        console.log("Can't get comments")
    }
}

//delete comment
export const removeComment = (id) => async (dispatch) => {
    const config = {
        headers: {
            authorization: localStorage.getItem('token')
        }
    }
    try {
        await axios.delete(`/animeapp/comment/deleteComment/${id}`, config)
    } catch (error) {
        console.log("Can't remove anime", error)
        dispatch({
            type: FAIL
        });
    }
}


//add
export const addComment = (data, id, navigate) => async (dispatch) => {
    const config = {
        headers: {
            authorization: localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.post(`/animeapp/comment/addComment/${id}`, data, config)
        console.log(res.data)
        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        });

    } catch (error) {
        dispatch({
            type: FAIL
        });
    }
}