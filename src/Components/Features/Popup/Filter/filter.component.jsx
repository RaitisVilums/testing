import "./filter.styles.scss";
import sortBy from "../../../../Utils/SORTBY_FILTER.json";
import filteredAttributes from "../../../../Utils/FILTERATTRIBUTES.json";
import PopupWrapper from "../../../Common/Popup/popup";
import Button from "../../../Common/Button/button";
import DoubleRangeInput from "../../../Common/InputRange/double-range-input";
import CheckBox from "../../../Common/InputCheckbox/checkbox";

const Filter = (props) => {
  const { onClose } = props;

  const closeHandler = () => {
    onClose && onClose();
  };

  const sortByInputs = document.querySelectorAll(".sort-by-input");

  sortByInputs.forEach((input) => {
    input.addEventListener("change", function () {
      sortByInputs.forEach((input) => {
        if (input !== this) {
          input.checked = false;
        }
      });
    });
  });
  return (
    <PopupWrapper onClose={onClose} className={`top`}>
      <div className="filter">
        <Button onClick={closeHandler} className={`btn-close`} />
        <div className=" | flex-column">
          <h1 className="filter-title">Sort By</h1>
          <div className="filter-sort-by">
            {sortBy.map((item) => (
              <CheckBox
                key={item.id}
                object={item}
                classInput={`sort-by-input`}
                classLabel={`sort-by-label`}
              />
            ))}
          </div>
        </div>
        <div className="filter-by">
          <h1 className="filter-title">Filter by</h1>
          <p className="filter-by-attribute">Bistro x</p>
          <p className="filter-by-attribute">Bistro x</p>
          <p className="filter-by-attribute">Bistro x</p>
        </div>

        <div className="filter-attributes">
          <div className="filter-attributes-group">
            <h2 className="filter-attributes-title">
              {filteredAttributes.heading}
            </h2>
            {filteredAttributes.items.map((item) => (
              <CheckBox
                key={item.id}
                object={item}
                classInput="filter-attributes-input"
                classLabel="filter-attributes-label"
              />
            ))}
          </div>

          <div className="filter-attributes-group">
            <h2 className="filter-attributes-title">Vibe</h2>
            <input
              className="filter-attributes-input"
              type="checkbox"
              id="crazy"
            />
            <label className="filter-attributes-label" htmlFor="crazy">
              Crazy
            </label>
            <input
              className="filter-attributes-input"
              type="checkbox"
              id="fancy"
            />
            <label className="filter-attributes-label" htmlFor="fancy">
              Fancy
            </label>
            <input
              className="filter-attributes-input"
              type="checkbox"
              id="spacious"
            />
            <label className="filter-attributes-label" htmlFor="spacious">
              Spacious
            </label>
            <input
              className="filter-attributes-input"
              type="checkbox"
              id="romantic"
            />
            <label className="filter-attributes-label" htmlFor="romantic">
              Romantic
            </label>
            <input
              className="filter-attributes-input"
              type="checkbox"
              id="casual"
            />
            <label className="filter-attributes-label" htmlFor="casual">
              Casual
            </label>
          </div>

          <div className="filter-attributes-group">
            <h2 className="filter-attributes-title">Food</h2>
            <input
              className="filter-attributes-input"
              type="checkbox"
              id="burgers"
            />
            <label className="filter-attributes-label" htmlFor="burgers">
              Burgers
            </label>
            <input
              className="filter-attributes-input"
              type="checkbox"
              id="steak"
            />
            <label className="filter-attributes-label" htmlFor="steak">
              Steak
            </label>
            <input
              className="filter-attributes-input"
              type="checkbox"
              id="pizza"
            />
            <label className="filter-attributes-label" htmlFor="pizza">
              Pizza
            </label>
            <input
              className="filter-attributes-input"
              type="checkbox"
              id="pasta"
            />
            <label className="filter-attributes-label" htmlFor="pasta">
              Pasta
            </label>
            <input
              className="filter-attributes-input"
              type="checkbox"
              id="cake"
            />
            <label className="filter-attributes-label" htmlFor="cake">
              Cake
            </label>
          </div>

          <div className="filter-attributes-group">
            <h2 className="filter-attributes-title">Extras</h2>
            <input
              className="filter-attributes-input"
              type="checkbox"
              id="open-now"
            />
            <label className="filter-attributes-label" htmlFor="open-now">
              Open Now
            </label>
            <input
              className="filter-attributes-input"
              type="checkbox"
              id="pet-friendly"
            />
            <label className="filter-attributes-label" htmlFor="pet-friendly">
              Pet Friendly
            </label>
            <input
              className="filter-attributes-input"
              type="checkbox"
              id="free-wifi"
            />
            <label className="filter-attributes-label" htmlFor="free-wifi">
              Free Wifi
            </label>
            <input
              className="filter-attributes-input"
              type="checkbox"
              id="charging-ports"
            />
            <label className="filter-attributes-label" htmlFor="charging-ports">
              Charging Ports
            </label>
            <input
              className="filter-attributes-input"
              type="checkbox"
              id="smoking-area"
            />
            <label className="filter-attributes-label" htmlFor="smoking-area">
              Smoking Area
            </label>
            <input
              className="filter-attributes-input"
              type="checkbox"
              id="accessible"
            />
            <label className="filter-attributes-label" htmlFor="accessible">
              Accessible
            </label>
          </div>
          <div className="filter-attributes-range">
            <DoubleRangeInput label={"Price"} min={0} max={100} />
            <DoubleRangeInput label={"Distance"} min={0} max={100} />
          </div>
        </div>
        <div className="filter-btn">
          <Button className={`btn-apply`}>Apply</Button>
        </div>
      </div>
    </PopupWrapper>
  );
};

export default Filter;
