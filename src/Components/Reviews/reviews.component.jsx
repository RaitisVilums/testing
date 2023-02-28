import React, { useState } from "react";
import "./reviews.styles.scss";

import PopupWrapper from "../Common/Popup/popup";
import Button from "../Common/Button/button";
import Search from "../Common/InputSearch/search";
import Status from "../Common/Status/restourant-status";
import dummyData from "../../Utils/DUMMY_DATA.json";

import { useNavigate } from "react-router-dom";

const Reviews = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const limitedData = dummyData.slice(startIndex, startIndex + itemsPerPage);

  const navigate = useNavigate();

  const handleNext = () => {
    const nextIndex = startIndex + itemsPerPage;
    if (nextIndex < dummyData.length) {
      setStartIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = startIndex - itemsPerPage;
    if (prevIndex >= 0) {
      setStartIndex(prevIndex);
    }
  };

  const closeHandler = () => {
    navigate(-1);
  };
  const handleSelect = () => {
    navigate(`/add-review/${selectedId}`);
  };

  return (
    <PopupWrapper onClose={closeHandler} className={`centered`}>
      <section className="reviews">
        <Button className={`btn-close`} onClick={closeHandler} />
        <h1 className="reviews-title">What would you like to review?</h1>
        <Search />
        <div className="reviews-wrapper">
          {limitedData.map((items) => {
            const { name, location, rating, image, type, id, isOpen } = items;
            const isSelected = id === selectedId;
            return (
              <div
                className={`review ${isSelected ? "selected" : ""}`}
                key={id}
                onClick={() => setSelectedId(id)}
              >
                <Status className={"review-status"} isOpen={isOpen} />
                <img className="review-image" src={image} alt="" />
                <div className="review-text">
                  <p className="review-text-para">{type}</p>
                  <div className="review-raiting">
                    <h1 className="review-raiting-heading">{name}</h1>
                    <span className="review-raiting">{rating}</span>
                  </div>
                  <p className="review-location">
                    <span className="wrapper-location-icon" /> {location}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="reviews-paggination">
          <Button className={`btn-prev`} onClick={handlePrev}></Button>
          <span>{`${startIndex + 1}-${Math.min(
            startIndex + itemsPerPage,
            dummyData.length
          )}`}</span>
          <Button className={`btn-next`} onClick={handleNext}></Button>
        </div>
        <Button
          className={`btn-select`}
          onClick={handleSelect}
          disabled={!selectedId}
        >
          Select
        </Button>
      </section>
    </PopupWrapper>
  );
};

export default Reviews;
