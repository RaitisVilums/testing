import "./restaurant.styles.scss";
import PopupWrapper from "../Common/Popup/popup";
import Button from "../Common/Button/button";
import dummyData from "../../Utils/DUMMY_DATA.json";
import { useContext } from "react";
import { PopupContext } from "../../Context/popup.context";
import Menu from "../Features/Popup/Menu/menu.popup";
import Booking from "../Features/Popup/Booking/book.popup";
import Aside from "./RestaurantComponents/aside.component";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../Assets/menu.svg";
import { ReactComponent as Share } from "../../Assets/share.svg";
import { ReactComponent as Unliked } from "../../Assets/likes.svg";
import { ReactComponent as Favorite } from "../../Assets/unliked.svg";
import { ReactComponent as ReviewsSmall } from "../../Assets/review-small.svg";
import { ReactComponent as Next } from "../../Assets/restaurant-next.svg";
import { ReactComponent as Prev } from "../../Assets/restaurant-prev.svg";
import { ReactComponent as ArrowDown } from "../../Assets/arrow-down.svg";
import OverallRating from "../Common/FixedRating/overallrating";
import food from "../../Assets/food_2.png";
import ReviewsPopup from "../Features/Popup/Reviews/reviews.popup";
import SelectedReview from "../Reviews/selected-review.component";

const Restaurant = () => {
  const { activePopup, openPopup, closePopup } = useContext(PopupContext);

  const menuHandler = () => {
    openPopup("menu");
  };

  const reviewsHandler = () => {
    openPopup("reviews");
  };
  const addReviewHandler = () => {
    openPopup("addReview");
  };

  const navigate = useNavigate();
  const closeHanlder = () => {
    navigate(-1);
  };
  const { id } = useParams();
  const selectedRestaurant = dummyData.find((item) => item.id === Number(id));
  const { name, description, slogan, type, webpage, location, rating, phone } =
    selectedRestaurant;
  const asideProps = { webpage, location, phone };
  // console.log(asideProps);

  return (
    <PopupWrapper onClose={closeHanlder} className={"middle"}>
      <section className="restaurant">
        <div className="restaurant__content">
          <Button onClick={closeHanlder} className={"btn-close"} />
          <div className="restaurant__heading">
            <h1>{name}</h1>
            <Button onClick={menuHandler} className={"btn-menu"}>
              menu <MenuIcon />
            </Button>
            <div className="restaurant__heading--buttons">
              <Button>
                <Share />
              </Button>
              <Button>
                <Favorite />
              </Button>
            </div>
          </div>
          <div className="restaurant__rating">
            <h2 className="restaurant__rating--type">{type}</h2>
            <div className="restaurant__rating--container">
              <OverallRating overall={rating} className={"restaurant__stars"} />
              <p>"{slogan}"</p>
            </div>
          </div>
          <div className="restaurant__images">
            <div className="restaurant__images--item">
              <h2>FOOD</h2>
              <img src={food} alt="" />
              <Button className={"restaurant__images--prev"}>
                <Prev />
              </Button>
              <Button className={"restaurant__images--next"}>
                <Next />
              </Button>
            </div>
            <div className="restaurant__images--item">
              <h2>INTERIER & EXTERIER</h2>
              <img src={food} alt="" />
              <Button className={"restaurant__images--prev"}>
                <Prev />
              </Button>
              <Button className={"restaurant__images--next"}>
                <Next />
              </Button>
            </div>
          </div>
          <div className="restaurant__description">
            <p>{description}</p>
          </div>

          <div className="section-reviews">
            <div className="section-reviews__heading">
              <h1>Reviews</h1>
              <Button onClick={addReviewHandler} className={"btn-review"}>
                add review <ReviewsSmall />
              </Button>
            </div>
            <div className="section-reviews__rating">
              <OverallRating className={"restaurant__stars"} overall={rating} />
              <p>{rating}/5</p>
              <p>206 reviews</p>
            </div>

            <div className="section-reviews__sort-by">
              <h2 className="section-reviews__sort-by--heading">Sort by</h2>
              <div className="section-reviews__sort-by--wrapper">
                <input
                  className="section-reviews__sort-by--input"
                  type="radio"
                  id="mostRecent"
                  name="sort"
                />
                <label
                  className="section-reviews__sort-by--label"
                  htmlFor="mostRecent"
                >
                  Most recent
                </label>
                <input
                  className="section-reviews__sort-by--input"
                  type="radio"
                  id="highestFirst"
                  name="sort"
                />
                <label
                  className="section-reviews__sort-by--label"
                  htmlFor="highestFirst"
                >
                  Highest first
                </label>
                <input
                  className="section-reviews__sort-by--input"
                  type="radio"
                  id="lowestFirst"
                  name="sort"
                />
                <label
                  className="section-reviews__sort-by--label"
                  htmlFor="lowestFirst"
                >
                  Lowest first
                </label>
                <input
                  className="section-reviews__sort-by--input"
                  type="radio"
                  id="relevance"
                  name="sort"
                />
                <label
                  className="section-reviews__sort-by--label"
                  htmlFor="relevance"
                  name="sort"
                >
                  Relevance
                </label>
              </div>
            </div>
            <div className="section-reviews__item">
              <div className="section-reviews__user">
                <img src={food} alt="" />
                <h2>Laura B.</h2>
                <span className="section-reviews__count">2 reviews</span>
              </div>
              <div className="section-reviews__content">
                <div className="section-reviews__overall">
                  <OverallRating overall={4.5} />
                  <span>27/10/22</span>
                </div>
                <h1>Amazing food, great atmosphere</h1>
                <p>
                  Been there lots of time eating their fresh and tasty ice
                  cream, but today my girlfriend and I had to try the warm food.
                  It was such a cozy and lovely experience. The best Italian
                  I've tried in Denmark. Will recommend it to all. Next time
                  we'll get their pizza
                </p>
              </div>
              <div className="section-reviews__images">
                <img src={food} alt="" />
                <img src={food} alt="" />
              </div>
              <div className="section-reviews__like">
                <Button>
                  <Unliked />
                </Button>
                <span>233</span>
              </div>
              <Button
                onClick={reviewsHandler}
                className={"section-reviews__button"}
              >
                <ArrowDown />
              </Button>
            </div>
          </div>
        </div>
        <Aside asideProps={asideProps} name={name} />
        {activePopup === "menu" && <Menu onClose={closePopup} name={name} />}
        {activePopup === "reviews" && <ReviewsPopup onClose={closePopup} />}
        {activePopup === "addReview" && (
          <SelectedReview selectedID={id} closePopup={closePopup} />
        )}

        {activePopup === "book" && <Booking onClose={closePopup} name={name} />}
      </section>
    </PopupWrapper>
  );
};

export default Restaurant;
