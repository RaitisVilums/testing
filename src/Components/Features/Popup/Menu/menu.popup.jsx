import { useState } from "react";
import "./menu.styles.scss";
import PopupWrapper from "../../../Common/Popup/popup";
import Button from "../../../Common/Button/button";
import DrinksMenu from "./MenuComponents/drinks-menu.component";
import StartersMenu from "./MenuComponents/starters-menu.component";
import { ReactComponent as Prev } from "../../../../Assets/green-prev.svg";
import { ReactComponent as Next } from "../../../../Assets/green-next.svg";

const Menu = ({ onClose, name }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < 4) setCurrentPage(currentPage + 1);
  };

  const handleMenuButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <PopupWrapper onClose={onClose} className={"middle"}>
      <section className="menu">
        <Button onClick={onClose} className={"btn-close"} />
        <div className="menu__heading">
          <h1>{name}</h1>
          <h2>Menu</h2>
        </div>
        <div className="menu-page">
          {currentPage === 1 && (
            <>
              <DrinksMenu /> <StartersMenu />
            </>
          )}
          {currentPage === 2 && <p>Main course page content</p>}
          {currentPage === 3 && <p>Desert Page Content</p>}
          {currentPage === 4 && <p>Specials</p>}
        </div>
        <Button
          className={"menu__button--prev"}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <Prev />
        </Button>
        <Button
          className={"menu__button--next"}
          onClick={handleNextPage}
          disabled={currentPage === 4}
        >
          <Next />
        </Button>
        <div className="menu__pagination">Page {currentPage}/4</div>
        <div className="menu__buttons">
          <Button
            className={`menu__button ${currentPage === 1 && "active-btn"}`}
            onClick={() => handleMenuButtonClick(1)}
          >
            Drinks & Starters
          </Button>
          <Button
            className={`menu__button ${currentPage === 2 && "active-btn"}`}
            onClick={() => handleMenuButtonClick(2)}
          >
            Main course
          </Button>
          <Button
            className={`menu__button ${currentPage === 3 && "active-btn"}`}
            onClick={() => handleMenuButtonClick(3)}
          >
            Desert
          </Button>
          <Button
            className={`menu__button ${currentPage === 4 && "active-btn"}`}
            onClick={() => handleMenuButtonClick(4)}
          >
            Specials
          </Button>
        </div>
      </section>
    </PopupWrapper>
  );
};

export default Menu;
