import React, { useState, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import AudioPlayer from "../../AudioPlayer/AudioPlayer";
import DisplayBeatDetails from "../../DisplayBeatDetails/DisplayBeatDetails";
import './FreeBeat.css';

// import {
//   allBeatSelector,
//   audioPlayerSelector,
// } from "../../../store/reducers/selector";

const FreeBeat = () => {
  const reduxState = useSelector(state => state)
  const {playing} = reduxState.playerReducer
  const {beatInfo}= reduxState.beatReducer

  const audio = useRef("audio_tag");
  const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const dispatch = useDispatch();

    const handleProgress = (e) => {
      let compute = (e.target.value * dur) / 100;
      setCurrentTime(compute);
      audio.current.currentTime = compute;
    };

  const beats = beatInfo.map(beat => {
    return (
      <DisplayBeatDetails
        key={beat._id}
        beat={beat}
        playing={playing}
      />
    );
  });

   return (
      <div className="container">
         <audio  ref={audio} src  onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
         onCanPlay={(e) => setDur(e.target.duration)} type="audio/mpeg" preload="true"/> 
        
        <div className="row">{beats}</div>
        <div className="audioplayer">
        <AudioPlayer handleProgress={handleProgress}  audio={audio}/>
        </div>
      </div>
  );
}

// const mapBeat = createStructuredSelector({
//   beatInfo: allBeatSelector,
//   audioPlayer: audioPlayerSelector,
// });

export default FreeBeat;

