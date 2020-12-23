import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { togglePlayButton, togglePlaying } from "../../../store/actions/player";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { playButtonSelector } from "../../../store/reducers/selector";
import { Link } from 'react-router-dom'

library.add(faPlay, faPause);

const BuyBeatsMap = ({ beat, togglePlaying, handleEnd, togglePlayButton}) => {
  const audio = useRef("audio_tag");
  const { price, title, bpm, mp3File } = beat;
  const toggleAudio = () =>
    audio.current.paused ? audio.current.play() : audio.current.pause();
  
  return (
    <>
      <div className="col-4 col-sm-2 col-md-2">
        <p>placeholder</p>
      </div>
      <div className="col-2 col-sm-2 col-md-2">
        <div className="font-section">
          <div className="play-button" onClick={() => {
                 togglePlaying(mp3File);
                 toggleAudio();
           }}>             
            <span className={!togglePlayButton ? "" : "hide"}>
            <FontAwesomeIcon icon={faPlay} />
          </span>
          <span className={!togglePlayButton ? "hide" : ""}>
            <FontAwesomeIcon icon={faPause} />
          </span>
            <audio
            onEnded={handleEnd}
            ref={audio}
            src={mp3File}
            type="audio/mpeg"
            preload="true"
          />
          </div>
        </div>
      </div>


      <div className="col-2 col-sm-4 col-md-4">
        <div className="title-bpm-column">
          <p className=""> {title}</p>
          <div className="bpm-column">
            <p> {bpm} </p>
          </div>
        </div>
      </div>

      <div className="col-4 col-sm-4 col-md-4">
        <div className="row butt_price_row">
          <p className="pr"> {price} </p>
            <span className="btn-buy-span">
                       <Link
                          to={{
                            pathname: "/buy-beats-details",
                            state:{
                              beat
                            }
                          }}
                          className="btn-link"
                          >
                           <input type="button" className="btn-buy" value="Buy Now" />
                        </Link>
            </span>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  playButton:playButtonSelector
});

export default connect(mapStateToProps, {togglePlaying, togglePlayButton})(BuyBeatsMap);
