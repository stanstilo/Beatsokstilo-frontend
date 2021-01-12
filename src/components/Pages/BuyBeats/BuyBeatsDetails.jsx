import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchSingleSell } from "../../../store/actions/sell";
import { singleSellSelector } from "../../../store/reducers/selector";
import {withRouter} from 'react-router-dom'
import "./BuyBeats.css";

const BuyBeatsDetails = ({ singleSell, match, history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleSell(match.params.id));
  }, []);

  const { imageFile, bpm, title, name} = singleSell;
  return (
    <>
      <div className="container">
        <div className="row">
          <div>
            <img className="artist-photo" style={{width:"220px", height:"150px", borderRadius:'50%'}} src={imageFile} alt="artistphoto" /> 
            <p className="beat-title"> {title} </p>
            <p className="bpm">BPM: {bpm}</p>
            <p className="bpm">PRODUCER : {name}</p>
            <button className="btn btn-success" onClick={()=>history.push("/initialize")}>Buy Now</button>
            <button className="btn btn-danger ml-3">Negotiate</button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapBeat = createStructuredSelector({
  singleSell: singleSellSelector,
});

export default withRouter(connect(mapBeat, fetchSingleSell)(BuyBeatsDetails));
