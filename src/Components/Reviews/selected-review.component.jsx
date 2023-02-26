import React, { useState, useContext } from "react";
import "./selected-review.styles.scss";

import PopupWrapper from "../Common/Popup/popup";
import Button from "../Common/Button/button";

import DescriptionForm from "./Forms/description-form.component";
import StarRatingForm from "./Forms/rating-form.component";
import SubmitForm from "./Forms/sumbit-form.coomponent";
import dummyData from "../../Utils/DUMMY_DATA.json";
import { FormContext } from "../../Context/reviews.context";
import { useParams, useNavigate } from "react-router-dom";

const SelectedReview = ({ selectedID, closePopup }) => {
  const { id } = useParams();
  const { handleSaveForm } = useContext(FormContext);
  const selectedRestaurant = selectedID
    ? dummyData.find((item) => item.id === Number(selectedID))
    : dummyData.find((item) => item.id === Number(id));
  const { name } = selectedRestaurant;
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  // ! Pagination clasess

  const firstPaginationClass = "pagination-item active";
  const secondPaginationClass =
    currentStep === 2 || currentStep === 3
      ? "pagination-item active"
      : "pagination-item";
  const thirdPaginationClass =
    currentStep === 3 ? "pagination-item active" : "pagination-item";

  const closeHandler = () => {
    navigate(-1);
    closePopup();
  };
  const formPublished = () => {
    navigate("/");
    closePopup();
  };

  const handleContinue = () => {
    setCurrentStep(currentStep + 1);
  };

  const renderStep = (step) => {
    switch (step) {
      case 1:
        return <StarRatingForm />;
      case 2:
        return <DescriptionForm />;
      case 3:
        return <SubmitForm />;
      default:
        return null;
    }
  };

  return (
    <PopupWrapper
      onClose={closePopup ? closePopup : closeHandler}
      className={`centered`}
    >
      <section className="selected-review">
        <Button
          className={`btn-close`}
          onClick={closePopup ? closePopup : closeHandler}
        ></Button>
        {currentStep === 3 ? (
          <div className="selected-review-heading">
            <h1 className="selected-review-title">
              Are you happy with your review?
            </h1>
          </div>
        ) : (
          <div className="selected-review-heading">
            <h1 className="selected-review-title">
              Write a review about {name}
            </h1>
          </div>
        )}

        {renderStep(currentStep)}
        {currentStep === 3 && (
          <div className="selected-review-back">
            <Button
              className={`btn-back`}
              onClick={() => {
                setCurrentStep(1);
              }}
            >
              go back
            </Button>
          </div>
        )}
        <div className="selected-review-pagination">
          <div className="pagination-items">
            <p className={firstPaginationClass}>1</p>
            <p className={secondPaginationClass}>2</p>
            <p className={thirdPaginationClass}>3</p>
          </div>
        </div>

        {currentStep < 3 ? (
          <div className="selected-review-btn">
            <Button
              className={`btn-continiue`}
              type={`button`}
              onClick={handleContinue}
            >
              CONTINUE
            </Button>
          </div>
        ) : (
          <div className="selected-review-btn">
            <Button
              onClick={() => {
                handleSaveForm();
                formPublished();
              }}
              className={`btn-continiue`}
              type={`button`}
            >
              Finish
            </Button>
          </div>
        )}
      </section>
    </PopupWrapper>
  );
};

export default SelectedReview;
