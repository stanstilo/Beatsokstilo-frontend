import * as actionTypes from "../actions/actionTypes";


const initialState = {
    sellInfo:[]
}

  export default (state = initialState, action) => {
    switch(action.type){
       case actionTypes.FETCH_SELL:
            return{
                ...state,
               sellInfo:action.payload
            }
        default: 
        return state
    }
}


