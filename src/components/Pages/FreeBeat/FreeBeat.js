import React, { useState, useRef} from "react";
import { useSelector } from "react-redux";
import AudioPlayer from "../../AudioPlayer/AudioPlayer";
import DisplayBeatDetails from "../../DisplayBeatDetails/DisplayBeatDetails";
import Pagination from "../Pagination/Pagination";
import './FreeBeat.css';

// import {
//   allBeatSelector,
//   audioPlayerSelector,
// } from "../../../store/reducers/selector";

const FreeBeat = () => {
  const reduxState = useSelector(state => state)
  const {playing} = reduxState.playerReducer
  const {beatInfo} = reduxState.beatReducer

  const audio = useRef("audio_tag");
  const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentPage, setCurrentPage] = useState(1)
  const [beatPerPage] = useState(2)

    const indexOfLastBeat = currentPage * beatPerPage
    const indexOfFirstBeat = indexOfLastBeat - beatPerPage
    const currentBeatInfo = beatInfo.slice(indexOfFirstBeat, indexOfLastBeat)

    const handleProgress = (e) => {
      let compute = (e.target.value * dur) / 100;
      setCurrentTime(compute);
      audio.current.currentTime = compute;
    };

  // Change Page On Click
  const paginate = pageNumber =>  setCurrentPage(pageNumber)


  const beats = currentBeatInfo.map(beat => {
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
        <Pagination beatPerPage={beatPerPage} totalBeat={beatInfo.length} paginate={paginate}/>
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

