import React, { useState } from "react";
import "./profile.styles.scss";
import profile from "../../Assets/profile-main.jpg";
import Button from "../Common/Button/button";
import { ReactComponent as LocationIcon } from "../../Assets/profile-location.svg";
import { ReactComponent as MessageIcon } from "../../Assets/profile-message.svg";
import { ReactComponent as ReviewsIcon } from "../../Assets/profile-reviews.svg";
import { ReactComponent as ReservationIcon } from "../../Assets/profile-reservations.svg";
import UserMessages from "./UserComponents/user-message.component";
import UserReviews from "./UserComponents/user-reviews.component";
import UserReservations from "./UserComponents/user-reservations.component";

const Profile = () => {
  const [activeLink, setActiveLink] = useState("messages");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <section className="profile">
      <div className="profile-wrapper">
        <div className="profile-user">
          <div className="profile-user-image">
            <img src={profile} alt="User" />
          </div>
          <div className="profile-user-text">
            <p className="profile-user-para">
              Member since <span className="profile-user-date"> 03/22</span>
            </p>
            <p className="profile-user-para">
              Total reviews - <span className="profile-user-count">203</span>
            </p>
          </div>
        </div>
        <div className="profile-utils">
          <h1 className="utils-heading">
            Lauren Grey
            <span className="utils-location">
              <LocationIcon />
              Riga, Latvia
            </span>
          </h1>
          <div className="utils-navigation">
            <Button
              onClick={() => handleLinkClick("messages")}
              className={`utils-navigation-item ${
                activeLink === "messages" ? "focused" : ""
              }`}
            >
              Messages
              <MessageIcon className="svg-icon" />
            </Button>
            <Button
              onClick={() => handleLinkClick("reviews")}
              className={`utils-navigation-item ${
                activeLink === "reviews" ? "focused" : ""
              }`}
            >
              Reviews <ReviewsIcon className="svg-icon" />
            </Button>
            <Button
              onClick={() => handleLinkClick("reservations")}
              className={`utils-navigation-item ${
                activeLink === "reservations" ? "focused" : ""
              }`}
            >
              Reservations
              <ReservationIcon className="svg-icon" />
            </Button>
            <hr className="utils-navigation-lane" />
          </div>
          {activeLink === "messages" && <UserMessages />}
          {activeLink === "reviews" && <UserReviews />}
          {activeLink === "reservations" && <UserReservations />}
        </div>
      </div>
    </section>
  );
};

export default Profile;
