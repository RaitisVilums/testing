import React from "react";
import "./button.styles.scss";

const Button = ({ children, onClick, className, disabled }) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
