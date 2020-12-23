import React, { useState, useEffect, useRef, useContext } from "react";
import playerContext from "../Context/playerContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
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

const Controls = (props) => {
  const {
    currentSong,
    songs,
    nextSong,
    prevSong,
    repeat,
    random,
    // playing,
    toggleRandom,
    toggleRepeat,
    togglePlaying,
    handleEnd,
  } = useContext(playerContext);

  const {mp3File,playing} = props
  const toggleAudio = () =>
    audio.current.play();

  const audio = useRef("audio_tag");
  const [statevolum, setStateVolum] = useState(0.3);
  const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + ~~s;
  };


  const handleVolume = (q) => {
    setStateVolum(q);
    audio.current.volume = q;
  };

  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute;
  };

  useEffect(() => {
    audio.current.volume = statevolum;
    if (playing) {
      toggleAudio();
    }
  }, [currentSong]);


  return (
    <div className="controls">
      <audio
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onCanPlay={(e) => setDur(e.target.duration)}
        onEnded={handleEnd}
        ref={audio}
        src={mp3File}
        type="audio/mpeg"
        preload="true"
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
          onClick={() => {
            togglePlaying(props.mp3File);
            toggleAudio();
          }}
        >
          <span className={!playing ? "" : "hide"}>
            <FontAwesomeIcon icon={faPlay} />
          </span>
          <span className={!playing ? "hide" : ""}>
            <FontAwesomeIcon icon={faPause} />
          </span>
        </span>
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
  );
};

export default Controls;













// import React, { useEffect, useRef } from "react";
// import playerContext from "../Context/playerContext";
// import {connect} from "react-redux";      
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import {
//   faStepForward,
//   faStepBackward,
//   faPlay,
//   faPause,
//   faRandom,
//   faRedoAlt,
//   faVolumeDown
// } from "@fortawesome/free-solid-svg-icons";
// import { setVolume, setDuration,setCurrentTime } from "../../store/actions/player";

// library.add(
//   faStepBackward,
//   faPlay,
//   faPause,
//   faStepForward,
//   faRandom,
//   faRedoAlt,
//   faVolumeDown
// );

// const Controls = ({volume,duration,mp3File,time,playing}) => {
  

//   const audio = useRef("audio_tag");

//   const fmtMSS = (s) => {
//     return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + ~~s;
//   };

//   const toggleAudio = () =>
//     audio.current.paused ? audio.current.play() : audio.current.pause();

//   const handleVolume = (q) => {
//      setVolume(q);
//     audio.current.volume = q;
//   };

//   const handleProgress = (e) => {
//     let compute = (e.target.value * duration) / 100;
//     setCurrentTime(compute);
//     audio.current.currentTime = compute;
//   };

//   useEffect(() => {
//     audio.current.volume = volume;
//     if (playing) {
//       toggleAudio();
//     }
//   }, [currentSong]);


//   return (
//     <div className="controls">
//       <audio
//         onTimeUpdate={(e) => setCurrentTime(e.target.time)}
//         onCanPlay={(e) => setDuration(e.target.duration)}
//         // onEnded={handleEnd}
//         ref={audio}
//         src={mp3File}
//         type="audio/mpeg"
//         preload="true"
//       />

//       {/* volume */}
//       <div className="vlme-container">
//         <span className="volum">
//           <FontAwesomeIcon className="vol-down" icon={faVolumeDown} />
//         </span>
//         <input
//           value={Math.round(volume* 100)}
//           type="range"
//           name="volBar"
//           id="volBar"
//           onChange={(e) => handleVolume(e.target.value / 100)}
//         />
//       </div>

//       {/* music controls */}
//       <div className="musicControls">
//         <span className="prev" onClick={prevSong}>
//           <FontAwesomeIcon icon={faStepBackward} />
//         </span>

//         <span
//           className="play"
//           onClick={() => {
//             togglePlaying(props.mp3File);
//             toggleAudio();
//           }}
//         >
//           <span className={!playing ? "" : "hide"}>
//             <FontAwesomeIcon icon={faPlay} />
//           </span>
//           <span className={!playing ? "hide" : ""}>
//             <FontAwesomeIcon icon={faPause} />
//           </span>
//         </span>
//         <span className="next" onClick={nextSong}>
//           <FontAwesomeIcon icon={faStepForward} />
//         </span>
//       </div>

//       {/* progress bar */}
//       <div className="progressb-container">
//         <span className="currentT">{fmtMSS(time)}</span>
//         <input
//           onChange={handleProgress}
//           value={duration ? (time * 100) / duration : 0}
//           type="range"
//           name="progresBar"
//           id="prgbar"
//         />
//         <span className="totalT">{fmtMSS(duration)}</span>
//       </div>

//      {/* pls */}
//       <div className="plsoptions">
//         <span
//           onClick={toggleRandom}
//           className={"random " + (random ? "active" : "")}
//           id="tog-random"
//         >
//           <FontAwesomeIcon icon={faRandom} />
//         </span>
//         <span
//           onClick={toggleRepeat}
//           className={"repeat " + (repeat ? "active" : "")}
//           id="tog-repeat"
//         >
//           <FontAwesomeIcon icon={faRedoAlt} />
//         </span>
//       </div>
//     </div>
//   );
// };
// const mapstate = state =>({
//   volume:state.playerReducer.volum,
//   duration:state.playerReducer.duration,
//   time:state.playerReducer.time,
//   playing:state.playerReducer.playing,
// })
// export default connect(mapstate,{setVolume,setDuration,setCurrentTime})(Controls);
