import React from "react";
import "./pricepoint.styles.scss";

function PricePoint({ onChagne }) {
  return (
    <div className="form-item">
      <h2 className="form-heading">Price point</h2>
      <div className="form-price">
        <input
          className="price-input"
          type="radio"
          id="affordable"
          name="price"
          value={`affordable`}
          onChange={onChagne}
        />
        <label htmlFor="affordable" className="price-label">
          Affordable $
        </label>
        <input
          className="price-input"
          type="radio"
          id="mid-range"
          name="price"
          value={`midRange`}
          onChange={onChagne}
        />
        <label htmlFor="mid-range" className="price-label">
          Mid-range $$
        </label>
        <input
          className="price-input"
          type="radio"
          id="fine-dining"
          name="price"
          value={`fineDining`}
          onChange={onChagne}
        />
        <label htmlFor="fine-dining" className="price-label">
          Fine dining $$
        </label>
      </div>
    </div>
  );
}

export default PricePoint;
