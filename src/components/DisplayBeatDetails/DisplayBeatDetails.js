import React, {useRef, useState} from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { showAudioplayer } from "../../store/actions/player";
import { useDispatch, useSelector } from "react-redux";
import "./DisplayBeatDetails.css";

library.add(faPlay, faPause);


 const DisplayBeatDetails = ({ beat }) => {
   const dispatch = useDispatch()
 
   const toggleAudio = () => audio.current.play();
   const audio = useRef("audio_tag");

  const reduxState = useSelector(state => state)
 const  handleEnd = reduxState.playerReducer.currentSong
  const single = reduxState.beatReducer.singleBeat

  const {musicId, playing, isPlayerShown} = reduxState.playerReducer
  const { _id, imageFile, title, name, mp3File, description } = beat;

const handlePlayPauseIcon = () => {
  if(playing && (_id === musicId)){
    return faPause
  }else{
    return faPlay
  }
}
const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);


  return (
    <>
      <audio  ref={audio} src={mp3File}  onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onCanPlay={(e) => setDur(e.target.duration)} type="audio/mpeg" preload="true"/>

      <div key={_id} className="col-9 mx-auto col-md-6 col-lg-3 my-5"> 
        <div className="card">
          <div className="card__top" onClick={() => {dispatch(showAudioplayer(_id))}}>
          <div className="image-play-icon-container">
            <FontAwesomeIcon
              className="image-play-icon"
              icon={handlePlayPauseIcon()}
              size="2x"
            />
          </div>
          <img src={imageFile} alt="uploaded files" className="beat-image" />
          </div>
          
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


export default DisplayBeatDetails

