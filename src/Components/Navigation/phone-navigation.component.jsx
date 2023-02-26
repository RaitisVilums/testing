import "./phone-navigation.styles.scss";

import { ReactComponent as Profile } from "../../Assets/profile-gray.svg";
import { ReactComponent as Favorites } from "../../Assets/favorites-gray.svg";
import { ReactComponent as Home } from "../../Assets/home.svg";
import { ReactComponent as Reviews } from "../../Assets/reviews-gray.svg";

import { Link } from "react-router-dom";

const PhoneNavigation = () => {
  return (
    <nav className="phone-nav">
      <ul className="phone-nav__list">
        <li className="phone-nav__item">
          <Link to="/">
            <Home className="phone-nav__item--icon" />
          </Link>
          Where to eat
        </li>
        <li className="phone-nav__item">
          <Link to="add-review">
            <Reviews className="phone-nav__item--icon" />
          </Link>
          Add review
        </li>
        <li className="phone-nav__item">
          <Link to="favorite">
            <Favorites className="phone-nav__item--icon" />
          </Link>
          My favorites
        </li>
        <li className="phone-nav__item">
          <Link to="/my-profile">
            <Profile className="phone-nav__item--icon" />
          </Link>
          Profile
        </li>
      </ul>
    </nav>
  );
};

export default PhoneNavigation;
