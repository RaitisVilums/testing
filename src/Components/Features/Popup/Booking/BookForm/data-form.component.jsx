import { Fragment } from "react";
import Input from "../../../../Common/InputForm/input";
import "./book-form.styles.scss";

const BookData = () => {
  return (
    <Fragment>
      <div className="book__output">
        <h2> Your reservation</h2>
        <p> December 2, 2022 16:40</p>
      </div>
      <div className="book__output">
        <h2> Your full name</h2>
        <Input type="fullName" id="name" placeholder="Full Name" />
      </div>
      <div className="book__output">
        <h2> Phone number</h2>
        <Input placeholder="+371 26406100" type="name" />
      </div>
      <div className="book__output">
        <h2> Email adress</h2>
        <Input placeholder="me@maratolli" type="name" />
      </div>
      <div className="book__output">
        <h2> Notes</h2>
        <textarea className="book__output--textarea" name="" id=""></textarea>
      </div>
    </Fragment>
  );
};

export default BookData;
