import React from "react";
import "./input.styles.scss";

const Input = ({ type, value, onChange, placeholder, className }) => {
  return (
    <input
      className={`input ${className}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
