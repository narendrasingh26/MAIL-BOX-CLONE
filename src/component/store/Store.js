import { configureStore } from "@reduxjs/toolkit";
import sendMailReducer from './mailSlice'
import authReducer from '../store/authSlice'


const store=configureStore({
    reducer:{
        mail:sendMailReducer,
        auth:authReducer
    }
})

export default store;