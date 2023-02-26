import React, { createContext, useState } from "react";

const PopupContext = createContext();

const PopupContextProvider = (props) => {
  const [activePopup, setActivePopup] = useState(null);

  const openPopup = (popupName) => {
    setActivePopup(popupName);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const closeHandler = () => {
    closePopup();
  };

  return (
    <PopupContext.Provider
      value={{ activePopup, openPopup, closePopup, closeHandler }}
    >
      {props.children}
    </PopupContext.Provider>
  );
};

export { PopupContext, PopupContextProvider };
