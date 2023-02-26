import "./starters-menu.styles.scss";

const StartersMenu = () => {
  return (
    <div className="menu-page__wrapper">
      <div className="menu-page__heading">
        <h1>Starters</h1>
      </div>
      <div className="menu-page__content--food">
        <div className="menu-page__content--food__heading">
          <h3>Fish fingers and beans</h3>
          <p>Includes 8 sea bass fish fingers with</p>
        </div>
        <div className="menu-page__sub-heading">
          <p>14,00$</p>
        </div>
      </div>
      <div className="menu-page__content--food">
        <div className="menu-page__content--food__heading">
          <h3>Cocktail sausages</h3>
          <p>Includes 8 sea bass fish fingers with a portion of Heinz beans</p>
        </div>
        <div className="menu-page__sub-heading">
          <p>9,00$</p>
        </div>
      </div>
      <div className="menu-page__content--food">
        <div className="menu-page__content--food__heading">
          <h3>Chicken nuggets</h3>
          <p>Includes 8 sea bass fish fingers with a portion of Heinz </p>
        </div>
        <div className="menu-page__sub-heading">
          <p>11,00$</p>
        </div>
      </div>
      <div className="menu-page__content--food">
        <div className="menu-page__content--food__heading">
          <h3>Beef stock</h3>
          <p>Includes 8 sea bass </p>
        </div>
        <div className="menu-page__sub-heading">
          <p>9,00$</p>
        </div>
      </div>
      <div className="menu-page__content--food">
        <div className="menu-page__content--food__heading">
          <h3>Includes 8 sea bass </h3>
          <p>Includes 8 sea bass fish fingers witans</p>
        </div>
        <div className="menu-page__sub-heading">
          <p>7,50$</p>
        </div>
      </div>
      <div className="menu-page__content--food">
        <div className="menu-page__content--food__heading">
          <h3>Prawn cocktail</h3>
          <p>Includes 8 sea bass fish fingers with a portion </p>
        </div>
        <div className="menu-page__sub-heading">
          <p>6,00$</p>
        </div>
      </div>
    </div>
  );
};

export default StartersMenu;
