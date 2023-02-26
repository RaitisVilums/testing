import "./form.styles.scss";
import ProfileImage from "../../../Assets/profile-image.png";

import { useContext } from "react";
import { FormContext } from "../../../Context/reviews.context";

import FixedRating from "../../Common/FixedRating/fixedrating";
import FixedPricePoint from "../../Common/FixedRating/fixedpricepoint";
import OverallRating from "../../Common/FixedRating/overallrating";

const SubmitForm = () => {
  const { formState } = useContext(FormContext);
  const {
    description,
    title,
    images,
    food,
    overall,
    interior,
    service,
    pricePoint,
    total,
  } = formState;
  return (
    <section className="form">
      <div className="form-wrapper">
        <div className="form-profile">
          <div className="profile-credentials">
            <img
              className="profile-credentials__image"
              src={ProfileImage}
              alt="You"
            />
            <h1 className="profile-credentials__name">Laura B.</h1>
            <span className="profile-credentials__count">2 reviews</span>
          </div>
          <div className="form-output">
            <div className="form-output__rating">
              <OverallRating
                overall={overall}
                className={`form-output__rating-overall`}
              />
              <span className="form-output__rating-date">27/10/22</span>
            </div>
            <div className="form-output__title">
              <h1>{title}</h1>
            </div>
            <div className="form-output__description">
              <p>{description}</p>
            </div>
            <div className="form-output__images">
              {images.map((photo, index) => (
                <img
                  key={index}
                  className="form-output__images-item"
                  src={URL.createObjectURL(photo)}
                  alt="Your uploads"
                />
              ))}
            </div>
          </div>
        </div>
        <div className=" | mr-btm">
          <FixedRating
            htmlFor={`food`}
            title={`Food`}
            rating={parseInt(food)}
          />
          <FixedRating
            htmlFor={`interior`}
            title={`Interior`}
            rating={parseInt(interior)}
          />
          <FixedRating
            htmlFor={`service`}
            title={`Service`}
            rating={parseInt(service)}
          />
        </div>
        <div className=" | mr-btm">
          <FixedPricePoint pricePoint={pricePoint} />
        </div>

        <div className="form-item">
          <div className=" | mr-btm">
            <h2 className="form-heading">
              How much did you spend per person here?
            </h2>
          </div>
          <div className="form-total">
            <input className="total-input" value={total} disabled />
            <label className="total-label" htmlFor="total">
              $
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmitForm;
