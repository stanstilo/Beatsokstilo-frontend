import React from 'react';
import { Slide } from 'react-slideshow-image';
import daw from '../asset/img/daw.jpg';
import studio from '../asset/img/studio.jpg';
import './SliderImage.css'

const slideImages = [
   daw,
   studio
];

 const SliderImage = () =>  {
    return (
    <>
      <div className="slide-container">
        <Slide>
          <div className="each-slide"> 
                <div className="image-slide">
              <img  style={{width:"100%", height:"250px"}} src={slideImages[0]} alt="tech-img"/>
            
              </div>
            </div>
          
          <div className="each-slide">
           <div className = "image-slide">
             <img src={slideImages[1]}  style={{width:"100%", height:"250px"}} alt="tech-img"/>
            </div>
          </div>
         
    
          
          <div className="each-slide">
           <div className="image-slide">
             <img src={slideImages[1]} style={{width:"100%", height:"250px"}} alt="tech-img"/>
            </div>
          </div>
        </Slide>
      </div>
    </>
    )
}

export default SliderImage
