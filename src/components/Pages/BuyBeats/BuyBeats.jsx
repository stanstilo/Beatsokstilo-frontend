import React, { useEffect, useRef, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchSell } from "../../../store/actions/sell";
import { sellSelector } from "../../../store/reducers/selector";
import "./BuyBeats.css";
import { Link } from "react-router-dom";
import { showAudioplayer } from "../../../store/actions/player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import AudioPlayer from "../../AudioPlayer/AudioPlayer";

library.add(faPlay, faPause);

const BuyBeats = ({ sellInfo }) => {
  // const reduxState = useSelector((state)=> state)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSell());
  }, []);

  const audio = useRef("audio_tag");
  const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute;
  };

  //  const beatsLoop = sellInfo.map(beat => {
  //    const {_id, title, price, bpm, mp3File} = beat
  //      return (
  //        <>
  //       <div key={_id} className="col-4 col-sm-2 col-md-2">
  //       <p>placeholder</p>
  //     </div>
  //     <div className="col-2 col-sm-2 col-md-2">
  //       <div className="font-section">
  //         <div className="play-button" onClick={() => {
  //             dispatch(showAudioplayer(_id));
  //           }}>
  //           <FontAwesomeIcon icon={faPlay} />
  //         </div>
  //       </div>
  //     </div>

  //     <div className="col-2 col-sm-4 col-md-4">
  //       <div className="title-bpm-column">
  //         <p className=""> {title}</p>
  //         <div className="bpm-column">
  //           <p> {bpm} </p>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="col-4 col-sm-4 col-md-4">
  //       <div className="row butt_price_row">
  //         <p className="pr"> {price} </p>
  //           <span className="btn-buy-span">
  //                      <Link
  //                         to={`/buy-beats-details/${_id}`}
  //                         className="btn-link"
  //                         >
  //                          <input type="button" className="btn-buy" value="Buy Now" />
  //                       </Link>
  //           </span>
  //       </div>
  //       <audio  ref={audio} src={mp3File} onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
  //           onCanPlay={(e) => setDur(e.target.duration)} type="audio/mpeg" preload="true"/>
  //     </div>
  //     </>
  //      )
  //   })

  return (
    <>
      <div className="all-containers">
        <div className="container">
          <div className="row beatsloop-row">
            {sellInfo.map((beat) => {
              const { _id, title, price, bpm, mp3File } = beat;
              console.log({beat})
              return (
                <>
                  {/* <audio
                    ref={audio}
                    src={mp3File}
                    onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
                    onCanPlay={(e) => setDur(e.target.duration)}
                    type="audio/mpeg"
                    preload="true"
                  /> */}
                  <div key={_id} className="col-4 col-sm-2 col-md-2">
                    <p>placeholder</p>
                  </div>
                  <div className="col-2 col-sm-2 col-md-2">
                    <div className="font-section">
                      <div
                        className="play-button"
                        onClick={() => {
                          dispatch(showAudioplayer({id:_id, isPremium:true}));
                        }}
                      >
                        <FontAwesomeIcon icon={faPlay} />
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
                          to={`/buy-beats-details/${_id}`}
                          className="btn-link"
                        >
                          <input
                            type="button"
                            className="btn-buy"
                            value="Buy Now"
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </>
              );
            })}

            <div className="audioplayer">
              <AudioPlayer  dur={dur} audio={audio} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapBeat = createStructuredSelector({
  sellInfo: sellSelector,
});

export default connect(mapBeat, fetchSell)(BuyBeats);
