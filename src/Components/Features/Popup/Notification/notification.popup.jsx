import { ReactComponent as Bell } from "../../../../Assets/bell.svg";
import React, { useState, useEffect } from "react";
import "./notification.styles.scss";

const Notification = ({ message, onClearMessage }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);

    const timer = setTimeout(() => {
      setShow(false);
      onClearMessage();
    }, 2000);

    return () => clearTimeout(timer);
  }, [message, onClearMessage]);

  return (
    <div className={`notification ${show ? "show" : ""}`}>
      <Bell className="notification__icon" />
      {message}
    </div>
  );
};

export default Notification;
