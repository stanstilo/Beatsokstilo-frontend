import React, {useEffect} from "react"
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchSell } from "../../../store/actions/sell";
import { sellSelector } from "../../../store/reducers/selector";
import './BuyBeats.css'
import { Link } from 'react-router-dom'
import { showAudioplayer } from "../../../store/actions/player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
library.add(faPlay, faPause);



 const BuyBeats = ({sellInfo}) => {
   
 const dispatch = useDispatch();
  useEffect(() => {
  dispatch(fetchSell())
}, [])

 const beatsLoop = sellInfo.map(beat => {
     return (
       <>
      <div key={beat._id} className="col-4 col-sm-2 col-md-2">
      <p>placeholder</p>
    </div>
    <div className="col-2 col-sm-2 col-md-2">
      <div className="font-section">
        <div className="play-button" onClick={() => {
            dispatch(showAudioplayer(beat._id));
          }}>             
          <FontAwesomeIcon icon={faPlay} />
        </div>
      </div>
    </div>


    <div className="col-2 col-sm-4 col-md-4">
      <div className="title-bpm-column">
        <p className=""> {beat.title}</p>
        <div className="bpm-column">
          <p> {beat.bpm} </p>
        </div>
      </div>
    </div>

    <div className="col-4 col-sm-4 col-md-4">
      <div className="row butt_price_row">
        <p className="pr"> {beat.price} </p>
          <span className="btn-buy-span">
                     <Link
                        to={`/buy-beats-details/${beat._id}`}
                        className="btn-link"
                        >
                         <input type="button" className="btn-buy" value="Buy Now" />
                      </Link>
          </span>
      </div>
    </div>
    </>
     )
  })
 
    return (
      <>
          <div className = "all-containers">
          <div className="container">
          <div className="row beatsloop-row">
             {beatsLoop}  
          </div>
          </div>
          </div>
      </>
    );
    }


    const mapBeat = createStructuredSelector({
      sellInfo:sellSelector
   })

export default connect(mapBeat, fetchSell)(BuyBeats)