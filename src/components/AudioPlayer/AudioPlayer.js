import React,{useEffect} from 'react'
import PlayerState from './PlayerState';
import Controls from './Controls';
import Header from './graphics/Header'
import './AudioPlayer.css'
import './input.css'
import { connect, useDispatch} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { singleBeatSelector } from '../../store/reducers/selector';
import {fetchSingleBeat} from '../../store/actions/beat'

const AudioPlayer = ({match, singleBeat, musicId, playing}) => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchSingleBeat(`${musicId}`))
  }, [musicId])
  console.log(singleBeat);
  
  return (
    <>
    <PlayerState> 
      <div className="main">
        <div className="top">
          <div className="left">
            {/* <Header /> */}  
          </div>
        </div>
        <Controls mp3File={singleBeat.mp3File} playing={playing}/>
      </div>
    </PlayerState>
    </>
   
  );
}
const mapAudioBeat = createStructuredSelector({
  singleBeat:singleBeatSelector
})
export default connect(mapAudioBeat,{fetchSingleBeat})(AudioPlayer);
