import React, { useEffect, useRef, useState } from "react";
import PlayerState from "./PlayerState";
import Controls from "./Controls";
import "./AudioPlayer.css";
import "./input.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleBeat } from "../../store/actions/beat";

const AudioPlayer = () => {

  const reduxState = useSelector((state) => state);
  const {
    musicId,
    showAudio,
    playing,
    isPlayerShown,
  } = reduxState.playerReducer;

  const {
    singleBeat: { mp3File },
    beatInfo,
    singleBeat,
   } = reduxState.beatReducer;
 
  const dispatch = useDispatch();
  const [currentPlayingMusicID, setCurrentPlayingMusicID] = useState("");

  useEffect(() => {
    //store current music id in state
    //only fetch when currentid is not equal to passed id
    if (currentPlayingMusicID !== musicId) {
      dispatch(fetchSingleBeat(`${musicId}`));
      setCurrentPlayingMusicID(musicId);
    }
  }, [musicId]);

  useEffect(() => {
    const toggleAudio = () => {
      audio.current.volume = 0.8;
      //when a music is clicked and it is playing, pause it other wise play it, 
      //if another music is selected, just change to the other music
      if (currentPlayingMusicID === musicId) {
        playing ? audio.current.play() : audio.current.pause();
      } else {
        audio.current.play();
      }
    };
   toggleAudio();
  }, [mp3File, playing]);

  
  const audio = useRef("audio_tag");
  
  useEffect(() => {
    console.log('TIMEUPDATE', audio.current.currentTime )
  }, [audio.current.currentTime])


  return (  
      <PlayerState>
        <div className="main">
          <Controls mp3File={singleBeat.mp3File} playing={playing} id={currentPlayingMusicID}/>
        </div>
        <audio ref={audio} src={mp3File} type="audio/mpeg" preload="true" />
      </PlayerState>
  );
};

export default AudioPlayer;


