import React  from "react";
import "./Home.css";
import "react-slideshow-image/dist/styles.css";
import SliderImage from "../../SliderImage/SliderImage";
import Main from "../../Main/Main";


const Home = () => {
    return (
      <>
        <div>
          <SliderImage />
        </div>
        <Main />
      </>
    );
  }


export default Home;
