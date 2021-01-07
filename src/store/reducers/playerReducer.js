import * as actionTypes from "../actions/actionTypes";
import { SetCurrent } from "../actions/player";

const initialState = {
  currentSong: 0,
  songs: '',
  repeat: false,
  random: false,
  playing: false,
  isPlayShown: false,
  audio: null,
  audioPlayer: true,
  volum:0.3,
  duration:0,
  time:0,
  musicId:[]
}

export default (state= initialState, action) => {
    // Prev song
    const prevSong = () => {
      if (state.currentSong === 0) {
        SetCurrent(state.songs.length - 1)
      } else {
        SetCurrent(state.currentSong - 1)
      }
    }
    // Next song
    const nextSong = () => {
      if (state.currentSong === state.songs.length - 1) {
        SetCurrent(0)
      } else {
        SetCurrent(state.currentSong + 1)
      }
    }

  const handleEnd = (dispatch) => {
    // Check for random and repeat options
    if (state.random) {
      return dispatch({ type: actionTypes.SET_CURRENT_SONG, data: ~~(Math.random() * state.songs.length) })
    } else {
      if (state.repeat) {
        nextSong()
      } else if ((state.currentSong === state.songs.length - 1)) {
        return
      } else {
        nextSong();
      }
    }
  }
  
  switch (action.type) {
    case actionTypes.SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: handleEnd(state.currentSong, action.data),
        playing: true
      }
    case actionTypes.TOGGLE_RANDOM:
      return {
        ...state,
        random: action.data
      }
    case actionTypes.TOGGLE_REPEAT:
      return {
        ...state,
        repeat: action.data
      }
      case actionTypes.TOGGLE_PLAYBUTTON:
        return{
          ...state,
          playButton:!state.playButton
        }

      case actionTypes.SHOW_AUDIOPLAYER:       
        const handleSetPlay = () => {
          if(state.musicId === action.payload){
            return !state.playing 
          }else{
            return true
          }
        }
        return{
          ...state,
          musicId:action.payload,
          isPlayerShown: true,
          playing: handleSetPlay()
        }
      
        // case actionTypes.PLAY_AUDIO:
        //   const handleSetPlay = () => {
        //     if(state.musicId === action.payload){
        //       return !state.playing 
        //     }else{
        //       return true
        //     }
        //   }
        //   return{
        //     ...state,
        //     playing:handleSetPlay()
        //   }
          
      case actionTypes.SETVOLUME:
        return{
          ...state,
          volum: action.payload
        }
      case actionTypes.SETDURATION:
        return{
          ...state,
          duration: action.payload
        }
      case actionTypes.SET_TIME:
        return{
          ...state,
          time: action.payload
        }
     default:
      return state
  }
}