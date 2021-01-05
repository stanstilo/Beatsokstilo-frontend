import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./Scroll.css";

library.add(faAngleUp);

const Scroll = () => {
  //    window.onscroll = function(){
  //    }

  useEffect(() => {
    handleScroll();
  }, []);

  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    document.addEventListener("scroll", toggleVisibilty);
  };
  //  const [intervalId, setScroll] = useState(0)
  const toggleVisibilty = () => {
    if (window.pageYOffset > 35) {
      setShowScroll(!showScroll);
    } else {
      setShowScroll(showScroll);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showScroll && (
        <div className="font-bg" onClick={() => scrollToTop()}>
          <FontAwesomeIcon className="font-awesome" icon={faAngleUp} />
        </div>
      )}
    </>
  );
};

export default Scroll;
