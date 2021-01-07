import * as actionTypes from "./actionTypes";



export const togglePlaying = () => dispatch => {
  dispatch({ type: actionTypes.TOGGLE_PLAYING });
};

export const SetCurrent = id => dispatch=>{
    dispatch({ type: actionTypes.SET_CURRENT_SONG, data: id })
}

export const setVolume = volum => dispatch=>{
    dispatch({ type: actionTypes.SETVOLUME, data: volum })
}

export const setDuration = duration => dispatch=>{
    dispatch({ type: actionTypes.SETDURATION, data: duration })
}

export const setCurrentTime = time => dispatch=>{
    dispatch({ type: actionTypes.SET_TIME, data: time })
}

// Repeat and Random
export const toggleRepeat = (id) => dispatch=>{dispatch({ type: actionTypes.TOGGLE_REPEAT })}
export const toggleRandom = (id) => dispatch=>{dispatch({ type: actionTypes.TOGGLE_RANDOM})}
// End of Song


export const showAudioplayer = (id) => dispatch => {  
    dispatch({type:actionTypes.SHOW_AUDIOPLAYER, payload:id})
}

export const playAudio = id => dispatch => {
    dispatch({type:actionTypes.PLAY_AUDIO, payload:id})
}
