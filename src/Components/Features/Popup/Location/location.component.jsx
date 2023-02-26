import "./location.styles.scss";
import PopupWrapper from "../../../Common/Popup/popup";
import Button from "../../../Common/Button/button";
import Input from "../../../Common/InputForm/input";
import React, { useState, useEffect } from "react";

const Location = (props) => {
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const { onClose } = props;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        setLocation(`${lat}, ${long}`);
        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`
        )
          .then((res) => res.json())
          .then((data) => {
            setCity(
              data.address.town || data.address.city || data.address.village
            );
            setCountry(data.address.country);
          });
      });
    } else {
      setLocation("Can't find you location!");
    }
  }, []);

  const closeHandler = () => {
    onClose && onClose();
  };
  return (
    <PopupWrapper onClose={onClose} className={` | top`}>
      <div className="location">
        <Button onClick={closeHandler} className={`btn-close`} />
        <h2 className="location-title">Location</h2>
        <Input
          className={`location-input`}
          type={"input"}
          value={`${city}, ${country}`}
        />
        <Button className={`btn-apply`}>Apply</Button>
      </div>
    </PopupWrapper>
  );
};

export default Location;
