import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchBeatUpload, fetchSingleBeat } from "../../../store/actions/beat";
import { showAudioplayer } from "../../../store/actions/player";
import {
  allBeatSelector,
  audioPlayerSelector,
} from "../../../store/reducers/selector";
import AudioPlayer from "../../AudioPlayer/AudioPlayer";
import DisplayBeatDetails from "../../DisplayBeatDetails/DisplayBeatDetails";

const FreeBeat = ({ beatInfo,toggleAudio,playing }) => {
  const dispatch = useDispatch();
console.log(toggleAudio);
  const beats = beatInfo.map((beat) => {
    return (
      <DisplayBeatDetails
        key={beat.id}
        beat={beat}
        toggleAudio={toggleAudio}
        playing={playing}
      />
    );
  });
  const mp3Beats = beatInfo.map((beat) => beat);
  useEffect(() => {
    dispatch(fetchSingleBeat());
  }, []);
  //   console.log(beat2);

  return (
    <>
      <div className="container">
        <div className="row">{beats}</div>
      </div>
    </>
  );
};

const mapBeat = createStructuredSelector({
  beatInfo: allBeatSelector,
  audioPlayer: audioPlayerSelector,
});
export default connect(mapBeat, {
  fetchBeatUpload,
  showAudioplayer,
  fetchSingleBeat,
})(FreeBeat);
