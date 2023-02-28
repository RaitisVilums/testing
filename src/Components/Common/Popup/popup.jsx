import React from "react";
import "./popup.styles.scss";
import ReactDOM from "react-dom";

const PopupWrapper = ({ children, className, onClose, backdrop }) => {
  return ReactDOM.createPortal(
    <>
      <div className={`backdrop`} onClick={onClose} />
      <div className={`popup ${className}`}>{children}</div>
    </>,
    document.getElementById("portal")
  );
};

export default PopupWrapper;
