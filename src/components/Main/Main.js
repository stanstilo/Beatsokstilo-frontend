import React from 'react'
import FreeBeat from '../Pages/FreeBeat/FreeBeat'
import './Main.css'

 const Main = () => {
   const downloadData = async () => {
     const urlLink = 'http://localhost:5000/file'
     fetch(urlLink)
     .then(response => {
       response.blob().then(blob => {
         let url = window.URL.createObjectURL(blob);
         let a = document.createElement('a');
         a.href = url;
         a.download = 'employees.json';
         a.click();
       });
       //window.location.href = response.url;
   });
   }

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