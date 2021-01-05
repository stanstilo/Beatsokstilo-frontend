import * as actionTypes from "../actions/actionTypes";

const initialState = {
    sellInfo:[],
    singleSell:[]
}

  export default (state = initialState, action) => {
    switch(action.type){
       case actionTypes.FETCH_SELL:
            return{
                ...state,
               sellInfo:action.payload
            }
            case actionTypes.FETCH_SINGLE_SELLBEAT:
                return{
                    ...state,
                    singleSell:action.payload.data
                }
        default: 
        return state
    }

}




