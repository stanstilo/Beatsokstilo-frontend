import axios from 'axios'
import * as actionTypes from './actionTypes'

export const fetchBeatUpload = () => async (dispatch) => {
   try{
       const {data} = await axios.get("http://localhost:5000/upload")
       dispatch({
           type:actionTypes.FETCH_BEAT_UPLOAD, payload:data
       })
   }catch(err){
       dispatch({type:actionTypes.FETCH_BEAT_UPLOAD_FAIL})
   }
}

export const fetchSingleBeat = (id, isPremium) => async (dispatch) => {
    console.log({id, isPremium})
    try{
        const URL = isPremium ? `http://localhost:5000/sell/${id}` : `http://localhost:5000/upload/${id}`
        const {data} = await axios.get(URL)
        dispatch({
            type:actionTypes.FETCH_SINGLE_BEAT, payload:data
        })
    }catch(err){
        dispatch({type:actionTypes.FETCH_SINGLE_BEAT_FAIL});  
    }
}