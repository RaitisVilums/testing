import "./double-range-input.scss";
import React, { useState } from "react";

const DoubleRangeInput = (props) => {
  const { min, max, label } = props;
  const [lowerValue, setLowerValue] = useState(min);
  const [upperValue, setUpperValue] = useState(max);

  // Just to be sure
  const check = label === "Price" ? `$` : `km`;

  const handleLowerValueChange = (e) => {
    const newLowerValue = parseInt(e.target.value, 10);
    if (newLowerValue > upperValue) {
      setLowerValue(upperValue);
      return;
    }
    setLowerValue(newLowerValue);
  };

  const handleUpperValueChange = (e) => {
    const newUpperValue = parseInt(e.target.value, 10);
    if (newUpperValue < lowerValue) {
      setUpperValue(lowerValue);
      return;
    }
    setUpperValue(newUpperValue);
  };

  return (
    <div className="slider">
      <label className="slider__label">
        {label} <span>{`${lowerValue}${check} - ${upperValue}${check}`}</span>
      </label>

      <div className="slider__track" />
      <div className="slider__range" />
      <input
        type="range"
        min={min}
        max={max}
        value={lowerValue}
        onChange={handleLowerValueChange}
        className="thumb thumb-zindex-3"
      />
      <input
        type="range"
        min={min}
        max={max}
        value={upperValue}
        onChange={handleUpperValueChange}
        className="thumb thumb-zindex-4"
      />
    </div>
  );
};

export default DoubleRangeInput;
