import React, { useState, useEffect } from "react";
import "./NavigationItems.css";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import SearchItem from "../SearchItem/SearchItem";

library.add(faSearch);
library.add(faUserPlus);


const NavigationItems = ({ history }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const [searchBeats, setSearchBeats] = useState([]);
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('joo')

  const handleToggleSearchImg = () => setShowSearch(!showSearch);
  const handleMouseEnter = (prevState) =>
    setdropdownOpen({ dropdownOpen: !prevState.dropdownOpen });
  const handleMouseLeave = () => setdropdownOpen(false);

  useEffect(() => {
    handleBorderForClick();
  }, []);

  // useEffect(() => {
  //   getBeats()
  // }, [query])
  const handleBorderForClick = () => {
    let midNavItem = document.querySelectorAll(".mid-nav-item > li");

    const handleNavClick = (e) => {
      for (var i = 0; i < midNavItem.length; i++) {
        if (midNavItem[i] === e.target && e.type === "click") {
          midNavItem[i].style.borderTop = "2px solid #bd493c";
        } else if (midNavItem[i] !== e.target && e.type !== "click") {
          midNavItem[i].style.borderTop = "none";
        } else {
          midNavItem[i].removeAttribute("style");
        }
      }
    };

    for (var i = 0; i < midNavItem.length; i++) {
      midNavItem[i].addEventListener("click", handleNavClick);
    }
  };

  const getBeats = async (e) => {
    // const beatName = e.target.elements.beatName.value;
    const url = 'http://localhost:5000/upload/';
    try {
      const response = await axios.get(url);
      const responseData = await response
      console.log(responseData);
      setSearchBeats(responseData.data);
    } catch (err) {
      console.log(err);
    }
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }
  
  return (
    <>
      <ul className="NavigationItems">
        <li className="NavigationImg">beatsokstilo</li>

        <div className="mid-nav-item">
          <li
            className="NavigationItem"
            activeClassName="NavigationItem--active"
            id="nav-item"
            onClick={() => {
              history.push("/");
            }}
           >
            Home
          </li>
          <li
            className="NavigationItem"
            id="nav-item"
            onClick={() => {
              history.push("/services");
            }}
          >
            About Us
          </li>
          <li
            className="NavigationItem"
            id="nav-item"
            onClick={() => {
              history.push("/free-beat");
            }}
          >
            Free Beat
          </li>
          <li
            className="NavigationItem"
            id="nav-item"
            onClick={() => {
              history.push("/upload-beat");
            }}
          >
            Upload Free Beat
          </li>
          <li
            className="NavigationItem-BeatStore"
            id="nav-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Beat Store
          </li>
          <li
            className="NavigationItem"
            id="nav-item"
            onClick={() => {
              history.push("/contact");
            }}
          >
            contact us
          </li>
          <li
            className="NavigationItem-ImgSearch"
            onClick={() => {
              handleToggleSearchImg();
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </li>
        </div>
        <li
          className="NavigationItem"
          id="nav-item"
          id="ext-nav-item"
          onClick={() => {
            history.push("/login");
          }}
        >
          Sign In
        </li>
        <li
          className="NavigationItem"
          id="nav-item"
          id="ext-nav-item"
        >
          <FontAwesomeIcon icon={faUserPlus} />
        </li>
      </ul>
      <div className="NavItems-ToggleShow">
        <div className="show-beatstore-items">
          <div
            className="show-beatstore-ptext"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ display: dropdownOpen ? "block" : "none" }}
           >
            <p onClick={() => history.push("/buy-beats")}>
              buy exclusive beats
            </p>
            <p onClick={() => history.push("/sell-beats")}>sell beats</p>
          </div>
        </div>
        
        {/* search form group */}
        <form
          className="show-search"
          onSubmit={getSearch}
          style={{ display: showSearch ? "block" : "none" }}
         >
          <input
            className="search_input"
            type="text"
            placeholder="search instrumental here"
            name="beatName"
            value={search}
            onChange = {updateSearch}
          />
          <button className="search-button">Search</button>
        </form>
      </div>
      <div className = "SearchItem-Container mt-4">
        <SearchItem  searchBeats = {searchBeats} search={search}/>
      </div>
    </>
  )
}

export default withRouter(NavigationItems);
