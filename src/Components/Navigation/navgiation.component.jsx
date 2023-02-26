import "./navgiation.styles.scss";
import React from "react";

import profile from "../../Assets/profile.svg";
import reviews from "../../Assets/reviews.svg";
import favorites from "../../Assets/favorites.svg";

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="navigation">
        <li className="navigation-item">
          <Link to="add-review">
            <img className="navigation-item-icon" src={reviews} alt="reviews" />
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="favorite">
            <img
              className="navigation-item-icon"
              src={favorites}
              alt="favorites"
            />
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="/my-profile">
            <img className="navigation-item-icon" src={profile} alt="profile" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
