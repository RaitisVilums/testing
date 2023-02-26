import "./phone-navigation.styles.scss";
import { useContext } from "react";
import { LoginContext } from "../../Context/login.context";
import { Link } from "react-router-dom";

import { ReactComponent as Profile } from "../../Assets/profile-gray.svg";
import { ReactComponent as Favorites } from "../../Assets/favorites-gray.svg";
import { ReactComponent as Home } from "../../Assets/home.svg";
import { ReactComponent as Reviews } from "../../Assets/reviews-gray.svg";

const PhoneNavigation = () => {
  const { isLoggedIn } = useContext(LoginContext);

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
          <Link to={isLoggedIn ? `/my-profile` : `/login`}>
            <Profile className="phone-nav__item--icon" />
          </Link>
          Profile
        </li>
      </ul>
    </nav>
  );
};

export default PhoneNavigation;
