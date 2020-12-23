import React, { Component } from "react";
import "./Home.css";
import "react-slideshow-image/dist/styles.css";
import SliderImage from "../../components/SliderImage/SliderImage";
import Main from "../../components/Main/Main";


class Home extends Component {
  render() {
    return (
      <>
        <div>
          <SliderImage />
        </div>
        <Main />
      </>
    );
  }
}

export default Home;
