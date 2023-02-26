import "./form.styles.scss";
import React from "react";

import { useContext } from "react";
import { FormContext } from "../../../Context/reviews.context";

import { ReactComponent as ImportImage } from "../../../Assets/importimage.svg";

const DescriptionForm = () => {
  const { handleInputChange, handleImageUpload } = useContext(FormContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleInputChange();
  };

  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <div className="form-item">
        <h2 className="form-heading">Title of your review</h2>
        <div className="review-title">
          <input
            className="review-title-input"
            type="text"
            name="title"
            id="title"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-item">
        <h2 className="form-heading">Your review</h2>
        <div className="review-description">
          <textarea
            className="review-description-input"
            name="description"
            id="description"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-item">
        <h2 className="form-heading">Add images</h2>

        <div className="image-upload">
          <label htmlFor="images">
            <ImportImage className="image-upload-icon" />
          </label>
          <input
            className="image-upload-input"
            type="file"
            name="images"
            id="images"
            multiple
            onChange={handleImageUpload}
          />
        </div>
      </div>
    </form>
  );
};

export default DescriptionForm;
