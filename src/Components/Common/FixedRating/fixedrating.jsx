import "./fixedraiting.styles.scss";

import React, { Fragment } from "react";
import { ReactComponent as EmptyStar } from "../../../Assets/emptystar.svg";

const FixedRating = ({ htmlFor, title, rating }) => {
  const stars = [5, 4, 3, 2, 1];

  return (
    <div className="form-item">
      <h2 className="form-heading">{title}</h2>
      <div className="form-stars">
        <div className="fixed-body">
          <div className="fixed-items">
            {stars.map((index) => (
              <Fragment key={index}>
                <input
                  type="radio"
                  className="fixed-item"
                  value={index}
                  checked={index === rating}
                  name={`${htmlFor}`}
                  id={`${htmlFor}-${index}-star`}
                  disabled
                />
                <label
                  className="fixed-label"
                  htmlFor={`${htmlFor}-${index}-star`}
                >
                  <EmptyStar className="star-2" />
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

export default FixedRating;
