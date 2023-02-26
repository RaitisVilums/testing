import "./book.styles.scss";
import PopupWrapper from "../../../Common/Popup/popup";
import Button from "../../../Common/Button/button";
import { Fragment } from "react";

const Booking = ({ onClose, name }) => {
  const options = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <PopupWrapper onClose={onClose} className={"centered"}>
      <section className="book">
        <Button onClick={onClose} className={"btn-close"} />
        <h1 className="book__heading">Book {name}</h1>
        <div className="book__attribute">
          <h2>For how many people?</h2>
          <div className="book__attribute--wrapper">
            {options.map((option) => (
              <Fragment key={option}>
                <input
                  className="book__attribute--input"
                  type="radio"
                  id={option}
                  name="people"
                  value={option}
                />
                <label
                  className="book__attribute--label"
                  htmlFor={option}
                  name="people"
                >
                  {option}
                </label>
              </Fragment>
            ))}
          </div>
        </div>
        <div className="book__attribute">
          <h2>What day and time?</h2>
        </div>
        <div className="book__attribute">
          <h2>Available times</h2>
          <div className="book__attribute--wrapper">
            <input
              className="book__attribute--input"
              type="radio"
              id="time1"
              name="time"
              value={"16:40"}
            />
            <label
              className="book__attribute--label"
              htmlFor="time1"
              name="time"
            >
              16:40
            </label>
            <input
              className="book__attribute--input"
              type="radio"
              id="time2"
              name="time"
              value={"16:40"}
            />
            <label
              className="book__attribute--label"
              htmlFor="time2"
              name="time"
            >
              16:40
            </label>
            <input
              className="book__attribute--input"
              type="radio"
              id="time3"
              name="time"
              value={"16:40"}
            />
            <label
              className="book__attribute--label"
              htmlFor="time3"
              name="time"
            >
              16:40
            </label>
            <input
              className="book__attribute--input"
              type="radio"
              id="time4"
              name="time"
              value={"16:40"}
            />
            <label
              className="book__attribute--label"
              htmlFor="time4"
              name="time"
            >
              16:40
            </label>
            <input
              className="book__attribute--input"
              type="radio"
              id="time5"
              name="time"
              value={"16:40"}
            />
            <label
              className="book__attribute--label"
              htmlFor="time5"
              name="time"
            >
              16:40
            </label>
          </div>
        </div>
      </section>
    </PopupWrapper>
  );
};

export default Booking;
