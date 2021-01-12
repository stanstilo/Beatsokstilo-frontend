import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchSingleSell } from "../../../store/actions/sell";
import { singleSellSelector } from "../../../store/reducers/selector";
import {withRouter} from 'react-router-dom'
import AudioPlayer from "../../AudioPlayer/AudioPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./BuyBeats.css";
import { showAudioplayer } from "../../../store/actions/player";


library.add(faPlay, faPause);


const BuyBeatsDetails = ({ singleSell, match, history }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleSell(match.params.id));
  }, []);

const reduxState = useSelector(state => state)
const { musicId, playing, isPremium } = reduxState.playerReducer;

  const { imageFile, bpm, title, name, _id} = singleSell;

  // const handlePlayPauseIcon = () => {
  //   if(playing &&  musicId == _id){
  //     return faPause
  //   }else{
  //     return faPlay
  //   }
  // }

  return (
    <>
      <div className = "buy-beats-details-container container">
        <div className="row">
          <div>
            <div className="artist-photo-container">
            <span className ="toggle-play-icon">
            <FontAwesomeIcon onClick = {() => dispatch(showAudioplayer({id:_id, isPremium:true}))} icon={playing ? faPause : faPlay} />
            </span>
            <img className="beat-image" src={imageFile} alt="artistphoto" /> 
    
            </div>
            <p className="beat-title"> {title} </p>
            <p className="bpm">BPM: {bpm}</p>
            <p className="bpm">PRODUCER : {name}</p>
            <button className="btn btn-success" onClick={()=>history.push("/initialize")}>Buy Now</button>
            <button className="btn btn-danger ml-3">Negotiate</button>
          </div>
        </div>
      </div>
      <AudioPlayer/>
    </>
  );
};

const mapBeat = createStructuredSelector({
  singleSell: singleSellSelector,
});

export default withRouter(connect(mapBeat, fetchSingleSell)(BuyBeatsDetails));
