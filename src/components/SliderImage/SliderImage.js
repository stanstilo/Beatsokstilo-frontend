import React from 'react';
import { Slide } from 'react-slideshow-image';
import yalebs_main_img1 from '../asset/img/yalebs_main_img1.jpg';
import software from '../asset/img/software.jpg';
import machinelearning from '../asset/img/machine-learning.jpg';
import './SliderImage.css'

const slideImages = [
  yalebs_main_img1,
  software,
  machinelearning
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
             <img src={slideImages[2]} style={{width:"100%", height:"250px"}} alt="tech-img"/>
            </div>
          </div>
        </Slide>
      </div>
    </>
    )
}

export default SliderImage
