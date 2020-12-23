import axios from 'axios'
import * as actionTypes from './actionTypes'
import {stopSubmit, reset} from "redux-form" 

export const authStart = () => {
    return{
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return{
        type:actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return{
        type:actionTypes.AUTH_FAIL,
        error:error
    }
}

// export const logout = () => {
//     localStorage.removeItem('token')
//     localStorage.removeItem('expirationDate')   
//     localStorage.removeItem('userId')
//    return{
//        type:actionTypes.AUTH_LOGOUT
//    }
// }

export const checkAuthTimeout = (expirationTime) => {
     return dispatch => {
        setTimeout(() => {
    },expirationTime * 1000)
}
} 

export const authLogin = ({email, password}) => async (dispatch) => {
    const config = {
        header: {
            "Content-Type":"application/json"
        }
   }
   const body = {email, password}
   try{
       const {data} = await axios.post("http://localhost:5000/SignIn", body, config)
       dispatch({
           type:actionTypes.AUTH_SUCCESS,
           payload:data
       })
   }catch(err){
       dispatch({type:actionTypes.AUTH_FAIL, payload:err.response.data.error});
       dispatch(stopSubmit("loginForm", console.log(err)))
       dispatch(reset("loginForm"))
   }
}

export const authRegister = ({email, password, mobileNumber}) => async (dispatch) => {
    const config = {
        header: {
            "Content-Type":"application/json"
        }
   }
   const body = {email, password, mobileNumber}
   try{
       const {data} = await axios.post("http://localhost:5000/SignUp", body, config)
       dispatch({
           type:actionTypes.AUTH_SUCCESS,
           payload:data
       })
   }catch(err){
       dispatch({type:actionTypes.AUTH_FAIL,payload:err.response.data.error});
       dispatch(stopSubmit("registerForm", console.log(err)))
       dispatch(reset("registerForm"))
   }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

