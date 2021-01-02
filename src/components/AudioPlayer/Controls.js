import React, { useState,  useContext } from "react";
import playerContext from "../Context/playerContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useDispatch, useSelector } from "react-redux";
import { showAudioplayer } from "../../store/actions/player";
import { ProgressBar } from "./ProgressBar";

import {
  faStepForward,
  faStepBackward,
  faPlay,
  faPause,
  faRandom,
  faRedoAlt,
  faVolumeDown
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faStepBackward,
  faPlay,
  faPause,
  faStepForward,
  faRandom,
  faRedoAlt,
  faVolumeDown
);

const Controls = ({id, audio, handleProgress}) => {
  const {  
    nextSong,
    prevSong,
    repeat,
    random,
    toggleRandom,
    toggleRepeat,
    handleEnd,
  } = useContext(playerContext);
 
  const dispatch = useDispatch()
  const reduxState = useSelector(state => state)
  const { playing, isPlayerShown} = reduxState.playerReducer
  const {mp3File}= reduxState.beatReducer.singleBeat

  const [statevolum, setStateVolum] = useState(0.8);
  const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

    const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + ~~s;
    };
        
   const toggleAudio = () =>  audio.current.paused ? audio.current.play() : audio.current.pause();
   
   const handleVolume = (q) => {
      setStateVolum(q);
      audio.current.volume = q;
    };
           
  return (
  <>
   { isPlayerShown && (   
     <div className="controls">
        <audio
           ref={audio}
           preload="true"
           onCanPlay={(e) => setDur(e.target.duration)}
           onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)} 
           src={mp3File}
           type="audio/mpeg"
          //  onEnded = {handleEnd}
        />

      {/* volume */}
      <div className="vlme-container">
        <span className="volum">
          <FontAwesomeIcon className="vol-down" icon={faVolumeDown} />
        </span>
        <input
          value={Math.round(statevolum * 100)}
          type="range"
          name="volBar"
          id="volBar"
          onChange={(e) => handleVolume(e.target.value / 100)}
        />
       
      </div>

      {/* music controls */}
      <div className="musicControls">
        <span className="prev" onClick={prevSong}>
          <FontAwesomeIcon icon={faStepBackward} />
        </span>
         <span
          className="play"
         >
          <span>
            <FontAwesomeIcon onClick = {() => dispatch(showAudioplayer(id))} icon={playing ? faPause : faPlay} />
          </span>
        </span>

        {/* next  */}
        <span className="next" onClick={nextSong}>
          <FontAwesomeIcon icon={faStepForward} />
        </span>
      </div>

      {/* progress bar */}
      <div className="progressb-container">
        <span className="currentT">{fmtMSS(currentTime)}</span>
        <input
          onChange={handleProgress}
          value={dur ? (currentTime * 100) / dur : 0}
          type="range"
          name="progresBar"
          id="prgbar"
        />
         {/* <ProgressBar progressPercent={progressBarWidth}/> */}
        <span className="totalT">{fmtMSS(dur)}</span>
      </div>

     {/* pls */}
      <div className="plsoptions">
         <span
          onClick={toggleRandom}
          className={"random " + (random ? "active" : "")}
          id="tog-random"
         >
          <FontAwesomeIcon icon={faRandom} />
        </span>

        <span
          onClick={toggleRepeat}
          className={"repeat " + (repeat ? "active" : "")}
          id="tog-repeat"
        >
          <FontAwesomeIcon icon={faRedoAlt} />
        </span>
      </div>
    </div>
   )}
   </>  
  );
};

export default Controls;
