import React, {useEffect} from "react"
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchSell } from "../../../store/actions/sell";
import { sellSelector } from "../../../store/reducers/selector";
import BuyBeatsDetailsMap from "./BuyBeatsDetailsMap";


 const BuyBeatsDetails = ({sellInfo}) => {   
 const dispatch = useDispatch();
 useEffect(() => {
 dispatch(fetchSell())
 }, [])

 const beatsLoop = sellInfo.map(beat => {
    return <BuyBeatsDetailsMap id={beat.id} beat={beat}/>
})
   return (
     <>
         <div className = "all-containers">
         <div className="container">
            {beatsLoop}  
         </div>
         </div>
     </>
   );
}

const mapBeat = createStructuredSelector({
    sellInfo:sellSelector
 })

export default connect(mapBeat, fetchSell)(BuyBeatsDetails)

