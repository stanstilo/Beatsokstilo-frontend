import React, { useEffect, useState, useRef } from "react";
import PlayerState from "./PlayerState";
import Controls from "./Controls";
import "./AudioPlayer.css";
import "./input.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleBeat } from "../../store/actions/beat";


const AudioPlayer = () => {
  const reduxState = useSelector((state) => state);
  const audio = useRef("audio_tag");
  const [dur, setDur] = useState(0);
  const { musicId, playing, isPremium } = reduxState.playerReducer;
  const {
    singleBeat: { mp3File },
    singleBeat,
  } = reduxState.beatReducer;
  const [currentTime, setCurrentTime] = useState(0);

  const dispatch = useDispatch();
  const [currentPlayingMusicID, setCurrentPlayingMusicID] = useState("");

  useEffect(() => {
    //store current music id in state
    //only fetch when currentid is not equal to passed id
    if (currentPlayingMusicID !== musicId) {
      dispatch(fetchSingleBeat(musicId, isPremium));
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

  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute;
  };

  console.log({ audio });

  return (
    <PlayerState>
      <audio
        ref={audio}
        src
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onCanPlay={(e) => setDur(e.target.duration)}
        type="audio/mpeg"
        preload="true"
      />

      <div className="main">
        <Controls
          mp3File={singleBeat.mp3File}
          playing={playing}
          id={currentPlayingMusicID}
          handleProgress={handleProgress}
          audio={audio}
        />
      </div>
    </PlayerState>
  );
};

export default AudioPlayer;
