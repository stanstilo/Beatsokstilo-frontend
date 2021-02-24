import React, { useState, useEffect } from "react";

import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import SearchItem from "../SearchItem/SearchItem";
import { checkIfUserIsLoggedIn } from "../../utility"
import jwt_decode from 'jwt-decode'
import {Dropdown} from 'reactstrap'
import "./NavigationItems.css";


library.add(faSearch);
library.add(faUserPlus);

 const NavigationItems = ({history}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const [searchBeats, setSearchBeats] = useState([]);
  const [filteredBeats, setFilteredBeats] = useState([]);
  const [searchValue, setSearchValue] = useState('')
  const [profileDropdownopen, setprofileDropdownopen] = useState(false)
 

  const logOut = () => {
   localStorage.removeItem("token")
   history && history.push("/login")
  }

  const handleToggleSearchImg = () => setShowSearch(!showSearch);

  const handleMouseEnter = (prevState) =>
    setdropdownOpen({ dropdownOpen: !prevState.dropdownOpen });

  const handleMouseLeave = () => setdropdownOpen(false);

  // const handleProfileDropdown = (prevState) => 
  //    setprofileDropdownopen({ profileDropdownopen: !prevState.profileDropdownopen});    
  
  const handleProfileDropdown = () => {
    setprofileDropdownopen(!profileDropdownopen)
  }

  const profilePage = () => {
    history.push("/profile")
  }

  const editProfilePage = () => {
    history.push("/edit")
  }

  useEffect(() => {
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
    handleBorderForClick();
  }, []);


  const getBeats = async (e) => {
    const beatName = e.target.elements.beatName.value;
    e.preventDefault()
    const url = `http://localhost:5000/upload/?title=${beatName}`;

    try {
      const response = await axios.get(url);
      const responseData = await response
      setSearchBeats(responseData.data);
      setSearchValue('')
      setShowSearch(true)
    } catch (err) {
      console.log(err);
    }
  }

  const handleSearchValue = e => {
    setSearchValue(e.target.value)
    let typedValue = e.target.value
    let filteredTypeValue = typedValue.length > 0 &&
      searchBeats.filter(
      beat => beat.title.toLowerCase().includes(beat.title.toLowerCase()))
      if (typedValue === ''){
       setFilteredBeats(searchBeats)
      }else{
        setFilteredBeats(filteredTypeValue)
      }
  }
  
  if(localStorage.getItem('token')) {
  let token = localStorage.getItem('token')
  const decoded = jwt_decode(token)
  var getUserEmail = decoded.email
  var splitUserEmail = getUserEmail.split("@")
  var userName = splitUserEmail[0]
 
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
          onClick={()=> logOut()}
         >
          {checkIfUserIsLoggedIn() ?   
            userName
          : 'Sign In' 
          }
        </li>
         
            <li style={{ display: checkIfUserIsLoggedIn() ? "block" : "none" }} onClick = {handleProfileDropdown} className="NavigationItem" id="nav-item">
            <div className='dropdown-section'>
              <FontAwesomeIcon  icon={faUserPlus} />
               <Dropdown className = "dropdown-toggle">
                 <div className='profile-dropdown'
                  style={{display: profileDropdownopen ? 'block':'none'}}
                  >
                  <h4 onClick = {()=>profilePage()}>Profile</h4>
                  <h4 onClick = {()=>editProfilePage()}>Edit Profile</h4>
                 <h4 onClick = {()=>logOut()}> {checkIfUserIsLoggedIn() ? "Sign Out" : "Sign In"}</h4>     
                </div> 
               </Dropdown>
              </div>
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
          onSubmit={getBeats}
          style={{ display: showSearch ? "block" : "none" }}
         >
          <input
            className="search_input"
            type="text"
            placeholder="search instrumental here"
            name="beatName"
            value={searchValue}
            onChange = {handleSearchValue}
          />
          <button className="search-button">Search</button>
        </form>
      </div>

      <div className = "SearchItem-Container mt-4">
        <SearchItem  searchBeats = {searchBeats} searchValue={searchValue}/>
      </div>
    </>
  )
}else{
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
          onClick={()=> logOut()}
        >
          {checkIfUserIsLoggedIn() ?   
            userName
          : 'Sign In' 
          }
        </li>

        <li
          className="NavigationItem"
          id="nav-item"
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
          onSubmit={getBeats}
          style={{ display: showSearch ? "block" : "none" }}
         >
          <input
            className="search_input"
            type="text"
            placeholder="search instrumental here"
            name="beatName"
            value={searchValue}
            onChange = {handleSearchValue}
          />
          <button className="search-button">Search</button>
        </form>
      </div>

      <div className = "SearchItem-Container mt-4">
        <SearchItem  searchBeats = {searchBeats} searchValue={searchValue}/>
      </div>
    </>
  )
}
}

export default withRouter(NavigationItems);
