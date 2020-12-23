import React from 'react'
import FreeBeat from '../Pages/FreeBeat/FreeBeat'


import './Main.css'

 const Main = () => {

    return (
        <>
        <div className="latest-beat-container">
          <div className="beats_headline">
            <h4>Latest Beats </h4>
          </div>
          <div className ="hr-container">
           <hr />
          </div>
             <FreeBeat />
          </div>
        </>
    )
}


export default Main