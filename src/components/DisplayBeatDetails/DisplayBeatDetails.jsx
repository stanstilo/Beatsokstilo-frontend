import React, { useState, useRef, useEffect } from "react";
import "./DisplayBeatDetails.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { connect, useDispatch } from "react-redux";
import { togglePlaying,showAudioplayer } from "../../store/actions/player";
import { Link } from "react-router-dom";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
// import { fetchSingleBeat } from "../../store/actions/beat";
library.add(faPlay, faPause);
const DisplayBeatDetails = ({
  beat,
  togglePlaying,
  handleEnd,
  showAudioplayer,
  props,
}) => {
  const audio = useRef("audio_tag");
  const [statevolum, setStateVolum] = useState(0.3);
  const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const { _id, imageFile, title, name, mp3File, description } = beat;


  const toggleAudio = () =>
     audio.current.play();

  const togglePlayButton = () => {};

  return (
    <>
      <div key={_id} className="col-9 mx-auto col-md-6 col-lg-3 my-5">
        <div className="card">
          <div className="image-play-icon-container">
            <FontAwesomeIcon
              className="image-play-icon"
              icon={faPlay}
              size="2x"
              onClick={() => { 
                showAudioplayer(_id)
              }}
            />
            {/* <Link to={`/audioplayer/${_id}`}>{`${_id}`}</Link> */}
          </div>
          <audio
            onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
            onCanPlay={(e) => setDur(e.target.duration)}
            onEnded={handleEnd}
            ref={audio}
            src={mp3File}
            type="audio/mpeg"
            preload="true"
          />
          <img src={imageFile} alt="uploaded files" className="beat-image" />
          <div className="card-text">
            <p className="title mb-0">
              <strong>{title}</strong>
            </p>
            <p className="mb-0">{description}</p>
            <p className="mb-0">
              Produced by : <span className="producer">{name}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  handleEnd: state.playerReducer.currentSong,
  single: state.beatReducer.singleBeat,
});
export default connect(mapStateToProps, { togglePlaying,showAudioplayer })(DisplayBeatDetails);
