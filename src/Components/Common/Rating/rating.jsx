import "./rating.styles.scss";

import React, { Fragment } from "react";
import { ReactComponent as EmptyStar } from "../../../Assets/emptystar.svg";

const FiveStarRating = ({ onChange, htmlFor, title }) => {
  const stars = [5, 4, 3, 2, 1];

  return (
    <div className="form-item">
      <h2 className="form-heading">
        {title && <span> Your overall rating</span>}
      </h2>
      <div className="form-stars">
        <div className="stars-body">
          <div className="stars-items">
            {stars.map((index) => (
              <Fragment key={index}>
                <input
                  type="radio"
                  className="stars-item"
                  value={index}
                  name={`${htmlFor}`}
                  id={`${htmlFor}-${index}-star`}
                  onChange={onChange}
                />
                <label
                  className="stars-label"
                  htmlFor={`${htmlFor}-${index}-star`}
                >
                  <EmptyStar className="star" />
                </label>
              </Fragment>
            ))}
          </div>
        </div>
        <p>Good</p>
      </div>
    </div>
  );
};

export default FiveStarRating;
