import "./desktop-header.styles.scss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PopupContext } from "../../../Context/popup.context";
import { LoginContext } from "../../../Context/login.context";

import logo from "../../../Assets/logo.svg";
import location from "../../../Assets/location.svg";
import filter from "../../../Assets/filter.svg";
import login from "../../../Assets/login.svg";

import Navigation from "../../Navigation/navgiation.component";
import Filter from "../../Features/Popup/Filter/filter.component";
import Button from "../../Common/Button/button";
import Location from "../../Features/Popup/Location/location.component";
import Search from "../../Common/InputSearch/search";

const DesktopHeader = () => {
  const { activePopup, openPopup, closePopup } = useContext(PopupContext);
  const { isLoggedIn } = useContext(LoginContext);

  const filterHandler = () => {
    openPopup("filter");
  };

  const locationHandler = () => {
    openPopup("location");
  };

  return (
    <header className="header">
      <Link to="/">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className="header-search">
        <Button onClick={locationHandler} className={`icon`}>
          <img src={location} alt="location icon" />
        </Button>
        <Search />
        <Button onClick={filterHandler} className={`icon`}>
          <img src={filter} alt="filter icon" />
        </Button>
      </div>
      {isLoggedIn ? (
        <Navigation />
      ) : (
        <div className="header-btn">
          <Link to={"/login"} className={" btn-login"}>
            log in
            <img src={login} alt="login" />
          </Link>
        </div>
      )}

      {activePopup === "filter" && (
        <Filter active={activePopup === "filter"} onClose={closePopup} />
      )}
      {activePopup === "location" && (
        <Location active={activePopup === "location"} onClose={closePopup} />
      )}
    </header>
  );
};

export default DesktopHeader;
