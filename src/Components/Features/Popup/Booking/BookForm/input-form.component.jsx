import { Fragment } from "react";
import "./book-form.styles.scss";
import Calendar from "../../../../Common/Calendar/calendar";

const BookInput = () => {
  const people = 12;

  const options = Array.from({ length: people }, (_, index) => index + 1);

  return (
    <Fragment>
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
              <label className="book__attribute--label" htmlFor={option}>
                {option}
              </label>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="book__attribute">
        <h2>What day and time?</h2>
        <div className="book__calendar">
          <Calendar />
        </div>
      </div>
      <div className="book__attribute">
        <h3>Available times</h3>
        <div className="book__attribute--wrapper">
          <input
            className="book__attribute--input"
            type="radio"
            id="time1"
            name="time"
            value={"16:40"}
          />
          <label className="book__attribute--label" htmlFor="time1" name="time">
            16:40
          </label>
          <input
            className="book__attribute--input"
            type="radio"
            id="time2"
            name="time"
            value={"17:40"}
          />
          <label className="book__attribute--label" htmlFor="time2" name="time">
            17:40
          </label>
          <input
            className="book__attribute--input"
            type="radio"
            id="time3"
            name="time"
            value={"18:40"}
          />
          <label className="book__attribute--label" htmlFor="time3" name="time">
            18:40
          </label>
          <input
            className="book__attribute--input"
            type="radio"
            id="time4"
            name="time"
            value={"19:40"}
          />
          <label className="book__attribute--label" htmlFor="time4" name="time">
            19:40
          </label>
          <input
            className="book__attribute--input"
            type="radio"
            id="time5"
            name="time"
            value={"20:40"}
          />
          <label className="book__attribute--label" htmlFor="time5" name="time">
            20:40
          </label>
        </div>
      </div>
    </Fragment>
  );
};

export default BookInput;
