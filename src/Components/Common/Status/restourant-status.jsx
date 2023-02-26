import React from "react";
import "./restourant-status.styles.scss";

const Status = ({ isOpen, promo, onSite, className }) => {
  return (
    <>
      <div
        className={
          isOpen
            ? `wrapper-working green ${className}`
            : `wrapper-working orange ${className}`
        }
      >
        {isOpen ? <p>Open</p> : <p>Closed</p>}
      </div>

      {promo ? (
        <div className="wrapper-promo promotion">
          <p>Promo</p>
        </div>
      ) : (
        ""
      )}

      {onSite ? (
        <div className="wrapper-promo on-site">
          <p>Book </p>
          <p>on site</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Status;
