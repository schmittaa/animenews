import {combineReducers} from 'redux'; 
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import userReducer from './userReducer';
import newsReducer from './newsReducer';
import commentReducer from './commentReducer';
import animeReducer from './animeReducer'


const rootReducer= combineReducers({
    authReducer, alertReducer, userReducer, newsReducer, animeReducer, commentReducer})

export default rootReducer