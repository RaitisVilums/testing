import "./user-reviews.styles.scss";
import { useState } from "react";

import food from "../../../Assets/food.png";
import { ReactComponent as Likes } from "../../../Assets/likes.svg";
import { ReactComponent as ArrowDown } from "../../../Assets/arrow-down.svg";
import Button from "../../Common/Button/button";
import OverallRating from "../../Common/FixedRating/overallrating";

const UserReviews = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <section className="user-reviews">
      <div
        className={`user-reviews__wrapper ${
          expanded ? "user-reviews__wrapper--expanded" : ""
        }`}
      >
        <div className="user-reviews__container">
          <div className="content">
            <h1 className="content__heading">Pasta Bella</h1>
            <div className="content__rating">
              <OverallRating overall={2.5} />
              <span className="user-reviews__date">27/10/22</span>
            </div>
            <h2 className="content__title">Amazing food, great atmosphere</h2>
            <p className="content__description">
              Been there lots of time eating their fresh and tasty ice cream,
              but today my girlfriend and I had to try the warm food. It was
              such a cozy and lovely experience. The best Italian I've tried in
              Denmark. Will recommend it to all. Next time we'll get their pizza{" "}
            </p>
          </div>
          <div className="content__images">
            <img className="content__image" src={food} alt="" />
            <img className="content__image" src={food} alt="" />
          </div>
          <div className="content__buttons">
            <div className="content__like-btn">
              <Likes />
              <span className="content__like-count">223</span>
            </div>
            <div className="content__expand-btn">
              <Button
                onClick={handleExpandClick}
                className={`btn__arrow-down-btn`}
              >
                <ArrowDown />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`user-reviews__wrapper ${
          expanded ? "user-reviews__wrapper--expanded" : ""
        }`}
      >
        <div className="user-reviews__container">
          <div className="content">
            <h1 className="content__heading">Pasta Bella</h1>
            <div className="content__rating">
              <OverallRating overall={2.5} />
              <span className="user-reviews__date">27/10/22</span>
            </div>
            <h2 className="content__title">Amazing food, great atmosphere</h2>
            <p className="content__description">
              Been there lots of time eating their fresh and tasty ice cream,
              but today my girlfriend and I had to try the warm food. It was
              such a cozy and lovely experience. The best Italian I've tried in
              Denmark. Will recommend it to all. Next time we'll get their pizza{" "}
            </p>
          </div>
          <div className="content__images">
            <img className="content__image" src={food} alt="" />
            <img className="content__image" src={food} alt="" />
          </div>
          <div className="content__buttons">
            <div className="content__like-btn">
              <Likes />
              <span className="content__like-count">223</span>
            </div>
            <div className="content__expand-btn">
              <Button
                onClick={handleExpandClick}
                className={`btn__arrow-down-btn`}
              >
                <ArrowDown />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`user-reviews__wrapper ${
          expanded ? "user-reviews__wrapper--expanded" : ""
        }`}
      >
        <div className="user-reviews__container">
          <div className="content">
            <h1 className="content__heading">Pasta Bella</h1>
            <div className="content__rating">
              <OverallRating overall={2.5} />
              <span className="user-reviews__date">27/10/22</span>
            </div>
            <h2 className="content__title">Amazing food, great atmosphere</h2>
            <p className="content__description">
              Been there lots of time eating their fresh and tasty ice cream,
              but today my girlfriend and I had to try the warm food. It was
              such a cozy and lovely experience. The best Italian I've tried in
              Denmark. Will recommend it to all. Next time we'll get their pizza{" "}
            </p>
          </div>
          <div className="content__images">
            <img className="content__image" src={food} alt="" />
            <img className="content__image" src={food} alt="" />
          </div>
          <div className="content__buttons">
            <div className="content__like-btn">
              <Likes />
              <span className="content__like-count">223</span>
            </div>
            <div className="content__expand-btn">
              <Button
                onClick={handleExpandClick}
                className={`btn__arrow-down-btn`}
              >
                <ArrowDown />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserReviews;
