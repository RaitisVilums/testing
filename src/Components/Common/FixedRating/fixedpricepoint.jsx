import React from "react";
import "./fixedpricepoint.styles.scss";

const FixedPricePoint = ({ pricePoint }) => {
  console.log(pricePoint);
  return (
    <div className="form-item">
      <h2 className="form-heading">Price point</h2>
      <div className="form-price-fixed">
        <input
          className="price-input"
          type="radio"
          id="affordable"
          name="price"
          value="affordable"
          checked={pricePoint === "affordable"}
          disabled
        />
        <label htmlFor="affordable" className="price-label-fixed">
          Affordable $
        </label>
        <input
          className="price-input"
          type="radio"
          id="mid-range"
          name="price"
          value="midRange"
          checked={pricePoint === "midRange"}
          disabled
        />

        <label htmlFor="mid-range" className="price-label-fixed">
          Mid-range $$
        </label>
        <input
          className="price-input"
          type="radio"
          id="fine-dining"
          name="price"
          value="fineDining"
          checked={pricePoint === "fineDining"}
          disabled
        />
        <label htmlFor="fine-dining" className="price-label-fixed">
          Fine dining $$$
        </label>
      </div>
    </div>
  );
};

export default FixedPricePoint;
