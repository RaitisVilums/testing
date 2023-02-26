import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.svg";
import Navigation from "../../Navigation/navgiation.component";

const ProfileHeader = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
      </Link>

      <Navigation />
    </header>
  );
};

export default ProfileHeader;
