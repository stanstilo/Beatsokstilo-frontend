import React from "react"
import './BuyBeats.css'


const BuyBeatsDetailsMap = () => {  
return (
    <>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img className="artist-photo" src={"l"} alt="artistphoto" />
              <p className="beat-title"> {} </p>
              <p className="bpm">
                BPM: {}
              </p>
              <p className="bpm">
                PRODUCER : melody
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
}
 export default BuyBeatsDetailsMap