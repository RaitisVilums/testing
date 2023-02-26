import "./form.styles.scss";
import React, { useContext } from "react";

import { FormContext } from "../../../Context/reviews.context";
import FiveStarRating from "../../Common/Rating/rating";
import PricePoint from "../../Common/Rating/pricepoint";

const StarRatingForm = () => {
  const { handleInputChange } = useContext(FormContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleInputChange();
  };

  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <FiveStarRating onChange={handleInputChange} htmlFor={`overall`} />
      <FiveStarRating
        title={`Food`}
        onChange={handleInputChange}
        htmlFor={`food`}
      />
      <FiveStarRating
        title={`Service`}
        onChange={handleInputChange}
        htmlFor={`service`}
      />
      <FiveStarRating
        title={`Interior`}
        onChange={handleInputChange}
        htmlFor={`interior`}
      />
      <PricePoint onChagne={handleInputChange} />
      <div className="form-item">
        <h2 className="form-heading">
          How much did you spend per person here?
        </h2>
        <div className="form-total">
          <input
            className="total-input"
            type="number"
            min="0.00"
            max="10000.00"
            id="total"
            name="total"
            onChange={handleInputChange}
          />
          <label className="total-label" htmlFor="total">
            $
          </label>
        </div>
      </div>
    </form>
  );
};

export default StarRatingForm;
