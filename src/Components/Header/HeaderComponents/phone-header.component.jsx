import "./phone-header.styles.scss";
import PhoneNavigation from "../../Navigation/phone-navigation.component";
import React, { useContext } from "react";

import { PopupContext } from "../../../Context/popup.context";
import { LoginContext } from "../../../Context/login.context";

import location from "../../../Assets/location.svg";
import filter from "../../../Assets/filter.svg";

import Filter from "../../Features/Popup/Filter/filter.component";
import Button from "../../Common/Button/button";
import Location from "../../Features/Popup/Location/location.component";
import Search from "../../Common/InputSearch/search";

const PhoneHeader = () => {
  const { activePopup, openPopup, closePopup } = useContext(PopupContext);

  const filterHandler = () => {
    openPopup("filter");
  };

  const locationHandler = () => {
    openPopup("location");
  };
  return (
    <>
      <div className="phone-search">
        <Button onClick={locationHandler} className={`icon`}>
          <img src={location} alt="location icon" />
        </Button>
        <Search />
        <Button onClick={filterHandler} className={`icon`}>
          <img src={filter} alt="filter icon" />
        </Button>
      </div>

      <PhoneNavigation />
      {activePopup === "filter" && (
        <Filter active={activePopup === "filter"} onClose={closePopup} />
      )}
      {activePopup === "location" && (
        <Location active={activePopup === "location"} onClose={closePopup} />
      )}
    </>
  );
};

export default PhoneHeader;
