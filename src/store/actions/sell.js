import axios from 'axios'
import * as actionTypes from './actionTypes'

export const fetchSell = () => async (dispatch) => {
     try{
          const {data} = await axios.get('http://localhost:5000/sell')
          dispatch({
              type:actionTypes.FETCH_SELL, 
              payload:data
          })
     }catch(err){
        dispatch({type:actionTypes.FETCH_SELL_FAIL});
     }
}