import "./main.styles.scss";
import dummyData from "../../Utils/DUMMY_DATA.json";
import Status from "../Common/Status/restourant-status";
import OverallRating from "../Common/FixedRating/overallrating";
import LV from "../../Assets/LV.svg";
import EN from "../../Assets/EN.svg";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <main className="main">
      <div className="main-language">
        <div className="language-type">
          <p>LV</p> <img src={LV} alt="LV flag" />
        </div>
        <div className="language-type">
          <p> EN</p> <img src={EN} alt="En flag" />
        </div>
      </div>

      {dummyData.map((items) => {
        const {
          name,
          location,
          rating,
          image,
          type,
          id,
          isOpen,
          promo,
          onSite,
        } = items;
        return (
          <div className="wrapper" key={id}>
            <Link className="wrapper-link" to={`/restaurant/${id}`} />
            <Status promo={promo} onSite={onSite} isOpen={isOpen} />
            <img className="wrapper-image" src={image} alt="restourant" />
            <div className="wrapper-text">
              <p className="wrapper-text-para">{type}</p>
              <div className="wrapper-raiting">
                <h1 className="wrapper-raiting-heading">{name}</h1>
                <span className="overall-raiting">
                  <OverallRating overall={rating} />
                </span>
              </div>
              <p className="wrapper-location">
                <span className="wrapper-location-icon" /> {location}
              </p>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default MainPage;
