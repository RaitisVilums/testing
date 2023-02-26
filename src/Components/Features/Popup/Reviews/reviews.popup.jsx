import "./reviews.styles.scss";
import PopupWrapper from "../../../Common/Popup/popup";
import food from "../../../../Assets/food_2.png";
import OverallRating from "../../../Common/FixedRating/overallrating";
import Button from "../../../Common/Button/button";
import { ReactComponent as Unliked } from "../../../../Assets/likes.svg";
import { ReactComponent as Next } from "../../../../Assets/green-next.svg";
import { ReactComponent as Prev } from "../../../../Assets/green-prev.svg";

const ReviewsPopup = ({ onClose }) => {
  return (
    <PopupWrapper onClose={onClose} className={"centered"}>
      <div className="reviews-popup">
        <Button onClick={onClose} className={"btn-close"} />
        <div className="reviews-popup__container">
          <div className="reviews-popup__profile">
            <img src={food} alt="" />
            <h2>Laura B.</h2>
            <p>2 reviews</p>
          </div>
          <div className="reviews-popup__content">
            <div className="reviews-popup__overall">
              <OverallRating overall={4.5} className={"reviews-popup__stars"} />
              <p>27/10/22</p>
            </div>
            <h1>Amazing food, great atmosphere</h1>
            <p>
              Been there lots of time eating their fresh and tasty ice cream,
              but today my girlfriend and I had to try the warm food. It was
              such a cozy and lovely experience. The best Italian I've tried in
              Denmark. Will recommend it to all. Next time we'll get their
              pizza. Been there lots of time eating their fresh and tasty ice
              cream, but today my girlfriend and I had to try the warm food. It
              was such a cozy and lovely experience.
            </p>
            <div className="reviews-popup__images">
              <Button className={"reviews-popup__images--button disabled"}>
                <Prev />
              </Button>
              <img src={food} alt="" />
              <img src={food} alt="" />
              <img src={food} alt="" />
              <Button className={"reviews-popup__images--button"}>
                <Next />
              </Button>
            </div>
          </div>
        </div>
        <div className="reviews-popup__likes">
          <Button className={"reviews-popup__button"}>
            <Unliked />
          </Button>
          <p>233</p>
        </div>
      </div>
    </PopupWrapper>
  );
};

export default ReviewsPopup;
