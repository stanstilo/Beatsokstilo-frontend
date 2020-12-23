import React, {useEffect} from "react"
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchSell } from "../../../store/actions/sell";
import { sellSelector } from "../../../store/reducers/selector";
import BuyBeatsMap from "./BuyBeatsMap";
import './styles/BuyBeats.css'


 const BuyBeats = ({sellInfo}) => {
   
 const dispatch = useDispatch();
  useEffect(() => {
  dispatch(fetchSell())
}, [])

 const beatsLoop = sellInfo.map(beat => {
     return <BuyBeatsMap beat={beat}/>
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