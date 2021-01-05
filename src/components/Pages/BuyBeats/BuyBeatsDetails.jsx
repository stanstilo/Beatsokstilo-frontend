import React, {useEffect} from "react"
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchSingleSell } from "../../../store/actions/sell";
import { singleSellSelector } from "../../../store/reducers/selector";
import './BuyBeats.css'


 const BuyBeatsDetails = ({singleSell, match}) => {
 console.log(singleSell);
 const dispatch = useDispatch();
 useEffect(() => {
 dispatch(fetchSingleSell(match.params.id))
 }, [])

//  const beatsLoop = singleSell.map(beat => {
    const {imageFile, bpm, title, name, _id } = singleSell
    return (
       <>
      <div key ={_id} className="container">
      <div className="row">
        <div className="col-md-6">
          <img className="artist-photo" src={imageFile} alt="artistphoto" />
          <p className="beat-title"> {title} </p>
          <p className="bpm">
            BPM: {bpm}
          </p>
          <p className="bpm">
            PRODUCER : {name}
          </p>                  
            <button
              className="btn btn-success"
              >
              Buy Now
            </button>
          <button className="btn btn-danger ml-3">Negotiate</button>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
    </>
    )
// })
   // return (
   //   <>
   //       <div className = "all-containers">
   //       <div className="container">
   //          {beatsLoop}  
   //       </div>
   //       </div>
   //   </>
   // );
}

const mapBeat = createStructuredSelector({
    singleSell:singleSellSelector
 })

export default connect(mapBeat, fetchSingleSell)(BuyBeatsDetails)

