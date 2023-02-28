import "./book.styles.scss";
import Backdrop from "../../../Common/Backdrop/backdrop";
import Button from "../../../Common/Button/button";
import BookInput from "./BookForm/input-form.component";
import BookData from "./BookForm/data-form.component";

import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

const Booking = ({ onClose, name }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const handleContinueClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleBookClick = () => {
    onClose();
  };

  let pageContent;

  switch (currentPage) {
    case 1:
      pageContent = <BookInput />;
      break;
    case 2:
      pageContent = <BookData />;
      break;
    default:
      pageContent = <BookInput />;
  }

  return (
    <Fragment>
      <Backdrop onClick={onClose} />
      <section className="book">
        <Button onClick={onClose} className={"btn-close"} />
        <h1 className="book__heading">Book {name}</h1>
        {pageContent}
        <div className="book__btn--wrapper">
          {currentPage === 1 ? (
            <Button onClick={handleContinueClick} className="btn-continiue">
              Continue
            </Button>
          ) : (
            <Button onClick={handleBookClick} className="btn-continiue">
              Book
            </Button>
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default Booking;
