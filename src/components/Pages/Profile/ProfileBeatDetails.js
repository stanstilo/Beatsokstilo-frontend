import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { showAudioplayer } from "../../../store/actions/player";
import ProfileAudioPlayer from "../../AudioPlayer/ProfileAudio/ProfileAudioPlayer";
import './ProfileBeatsDetails.css'

library.add(faPlay, faPause);

const ProfileBeatDetails = () => {
  const reduxState = useSelector((state) => state);
  const dispatch = useDispatch();
  const { musicId, playing } = reduxState.playerReducer;
  const {beatInfo} = reduxState.beatReducer;
  
  const beat_id = beatInfo.map(allBeats => {
      const {_id} = allBeats
      return(
         {_id}
      )
  })

  const handlePlayPauseIcon = () => {
    if (playing && beat_id === musicId) {
        return faPause;
      } else {
        return faPlay;
      } 
  }

  return (
    <>
      {beatInfo.map(beat=>{
          const { _id, imageFile, title, name, description } = beat;
         return(
           <div key={_id} className="profilebeats-section">
            <div className="cards">
              <div
                className="cards__top"
                onClick={() => {
                  dispatch(showAudioplayer({id:_id, isPremium:false}));
                }}
              >

                <div className="images-play-icon-container">
                  <FontAwesomeIcon
                    className="images-play-icon"
                    icon={handlePlayPauseIcon()}
                    size="2x"
                  />
                </div> 
                <img src={imageFile} alt="uploaded files" className="beats-image" />        
              </div>
              {/* cards text */}
              <div className="cards-text">
                <p className="titles mb-0">
                  <strong>{title}</strong>
                </p>
                <p className="mb-0">{description}</p>
                <p className="mb-0">
                  Produced by : <span className="producers">{name}</span>
                </p>
              </div>     
            </div>
            <ProfileAudioPlayer />
            </div>
         )
      })}
    </>
  );
};

export default ProfileBeatDetails;
