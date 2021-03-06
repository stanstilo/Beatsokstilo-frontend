import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import AudioPlayer from "../../AudioPlayer/AudioPlayer";
import DisplayBeatDetails from "../../DisplayBeatDetails/DisplayBeatDetails";
import Pagination from "../Pagination/Pagination";
import './FreeBeat.css';

const FreeBeat = () => {
  const reduxState = useSelector(state => state)
  const {playing} = reduxState.playerReducer
  const {beatInfo} = reduxState.beatReducer
  const audio = useRef("audio_tag");
  const [dur] = useState(0);
  // const [currentTime, setCurrentTime] = useState(0);
  const [currentPage, setCurrentPage] = useState(1)
  const [beatPerPage] = useState(4)

    const indexOfLastBeat = currentPage * beatPerPage
    const indexOfFirstBeat = indexOfLastBeat - beatPerPage
    const currentBeatInfo = beatInfo.slice(indexOfFirstBeat, indexOfLastBeat)

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
        <div className="row">{beats}</div>
        <Pagination beatPerPage={beatPerPage} totalBeat={beatInfo.length} paginate={paginate}/>
        <div className="audioplayer">
          <AudioPlayer dur={dur} audio={audio} />
        </div>
      </div>
  );
}

export default FreeBeat;
