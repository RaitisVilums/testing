import "./favorites.styles.scss";
import PopupWrapper from "../Common/Popup/popup";
import Button from "../Common/Button/button";
import Status from "../Common/Status/restourant-status";
import OverallRating from "../Common/FixedRating/overallrating";
import dummyData from "../../Utils/DUMMY_DATA.json";
import image from "../../Assets/rest.jpg";

import { ReactComponent as Hearth } from "../../Assets/hearth.svg";
import { ReactComponent as Reviews } from "../../Assets/reviews.svg";

import { useNavigate, Link } from "react-router-dom";

const Favorites = () => {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate(-1);
  };

  return (
    <PopupWrapper onClose={closeHandler} className={`right`}>
      <section className="favorites">
        <Button onClick={closeHandler} className={`btn-close`} />
        <h1 className="favorites-heading">Your favorites</h1>
        {dummyData.map((favorite) => {
          const { name, type, isOpen, rating, location, id } = favorite;
          return (
            <div className="favorites-wrapper" key={id}>
              <div className="favorites-restourant">
                <Status isOpen={isOpen} className={"white"} />
                <img className="favorites-image" src={image} alt="restourant" />
                <div className="favorites-text">
                  <p className="favorites-text-para">{type}</p>
                  <div className="favorites-rating">
                    <h1 className="favorites-rating-heading">{name}</h1>
                    <span className="favorites-rating-stars">
                      <OverallRating overall={rating} />
                    </span>
                  </div>
                  <p className="favorites-location">
                    <span className="favorites-location-icon" /> {location}
                  </p>
                </div>
              </div>
              <div className="favorites-btns">
                <Button>
                  <Hearth className="favorites-hearth" />
                </Button>
                <Link to={`/add-review/${id}`}>
                  <Reviews className="favorites-reviews" />
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </PopupWrapper>
  );
};

export default Favorites;
