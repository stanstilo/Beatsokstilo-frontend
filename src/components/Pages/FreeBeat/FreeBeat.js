import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBeatUpload, fetchSingleBeat } from "../../../store/actions/beat";

// import {
//   allBeatSelector,
//   audioPlayerSelector,
// } from "../../../store/reducers/selector";
import DisplayBeatDetails from "../../DisplayBeatDetails/DisplayBeatDetails";


const FreeBeat = () => {
  const reduxState = useSelector(state => state)
  const {musicId, showAudio, playing, isPlayerShown} = reduxState.playerReducer
  const {beatInfo}= reduxState.beatReducer

const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleBeat());
    }, []);
  
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
        <div className="row">{beats}</div>
      </div>
  );
}

// const mapBeat = createStructuredSelector({
//   beatInfo: allBeatSelector,
//   audioPlayer: audioPlayerSelector,
// });

export default FreeBeat;

