import "./drinks-menu.styles.scss";

const DrinksMenu = () => {
  return (
    <div className="menu-page__container">
      <div className="menu-page__heading">
        <h1>Drinks</h1>

        <div className="menu-page__sub-heading">
          <p>
            <span className="sub-heading__span">0,25l</span>
          </p>
          <p>
            <span className="sub-heading__span">0,5l</span>
          </p>
          <p>
            <span className="sub-heading__span">0,7l</span>
          </p>
        </div>
      </div>
      <div className="menu-page__content">
        <h2>Soda and Drinks</h2>
        <div className="menu-page__content--drinks">
          <div className="menu-page__heading">
            <h3>Coca cola</h3>
          </div>
          <div className="menu-page__sub-heading">
            <p>2,00$</p>
            <p>3,00$</p>
            <p>3,50$</p>
          </div>
        </div>
        <div className="menu-page__content--drinks">
          <div className="menu-page__heading">
            <h3>Watter</h3>
          </div>
          <div className="menu-page__sub-heading">
            <p>1,00$</p>
            <p>1,20$</p>
            <p>1,50$</p>
          </div>
        </div>
        <div className="menu-page__content--drinks">
          <div className="menu-page__heading">
            <h3>Juice</h3>
          </div>
          <div className="menu-page__sub-heading">
            <p>2,00$</p>
            <p>2,50$</p>
            <p>3,00$</p>
          </div>
        </div>
      </div>
      <div className="menu-page__content">
        <h2>Cocktails</h2>
        <div className="menu-page__content--drinks">
          <div className="menu-page__heading">
            <h3>G&T with Schwepes</h3>
          </div>
          <div className="menu-page__sub-heading">
            <p>2,00$</p>
            <p>4,00$</p>
            <p>8,00$</p>
          </div>
        </div>
        <div className="menu-page__content--drinks">
          <div className="menu-page__heading">
            <h3>Rum and coke</h3>
          </div>
          <div className="menu-page__sub-heading">
            <p></p>
            <p>5,00$</p>
            <p>9,00$</p>
          </div>
        </div>
        <div className="menu-page__content--drinks">
          <div className="menu-page__heading">
            <h3>Screwdriver</h3>
          </div>
          <div className="menu-page__sub-heading">
            <p></p>
            <p>2,00$</p>
            <p>3,00$</p>
          </div>
        </div>
        <div className="menu-page__content--drinks">
          <div className="menu-page__heading">
            <h3>Margarita punch</h3>
          </div>
          <div className="menu-page__sub-heading">
            <p>4,00$</p>
            <p>5,00$</p>
          </div>
        </div>
        <div className="menu-page__content">
          <h2>Beer</h2>
          <div className="menu-page__content--drinks">
            <div className="menu-page__heading">
              <h3>Corona extra</h3>
            </div>
            <div className="menu-page__sub-heading">
              <p></p>
              <p>5,00$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinksMenu;
