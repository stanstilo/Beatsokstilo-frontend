import * as actionTypes from "../actions/actionTypes";


const initialState = {
    beatInfo:[],
    singleBeat:[]

}

  export default (state = initialState, action) => {
    switch(action.type){
       case actionTypes.FETCH_BEAT_UPLOAD:
            return{
                ...state,
                beatInfo:action.payload
            }
       case actionTypes.FETCH_SINGLE_BEAT:
            return{
                ...state,
                singleBeat:action.payload
            }
        default: return state
    }
}


