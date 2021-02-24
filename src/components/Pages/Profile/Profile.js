import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import jwt_decode from "jwt-decode";

import ProfileBeatDetails from "./ProfileBeatDetails";
import "./profile.css";

library.add(faUserPlus);

export default function Profile() {
  let token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  var getUserEmail = decoded.email;
  var splitUserEmail = getUserEmail.split("@");
  var userName = splitUserEmail[0];

  return (
    <div className="profile">
      <div className="profile-container">
        <div className="profile-content">
          <FontAwesomeIcon icon={faUserPlus} className="userplus" />
          <h4 className="username">{userName}</h4>
          <ul className='profile-monitoring-activities'>
            <li>Uploads</li>
            <li>Favorites</li>
            <li>Following</li>
            <li>Followers</li>
          </ul>
          <h6>Recent Uploads</h6>
            <ProfileBeatDetails />
        </div>
      </div>
    </div>
  );
}
