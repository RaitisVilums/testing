import "./aside.styles.scss";
import Button from "../../Common/Button/button";
import Booking from "../../Features/Popup/Booking/book.popup";
import { useContext } from "react";
import { PopupContext } from "../../../Context/popup.context";
import { ReactComponent as BookTable } from "../../../Assets/book-table.svg";
import { ReactComponent as Phone } from "../../../Assets/phone.svg";
import { ReactComponent as Web } from "../../../Assets/web.svg";
import { ReactComponent as LocationBlack } from "../../../Assets/location-black.svg";

const Aside = ({ asideProps, name }) => {
  const { phone, webpage, location } = asideProps;
  const { activePopup, closePopup, openPopup } = useContext(PopupContext);

  const bookHanlder = () => {
    openPopup("book");
  };
  return (
    <>
      <aside className="aside">
        <div className="aside__heading">
          <h1>Dine-in, Takeaway, Delivery</h1>
          <div className="aside__categories">
            <p className="aside__categories--item">Accessible</p>
            <p className="aside__categories--item">Accessible</p>
            <p className="aside__categories--item">Accessible</p>
            <p className="aside__categories--item">Accessible</p>
            <p className="aside__categories--item">Accessible</p>
          </div>
        </div>
        <div className="aside__working">
          <h2 className="aside__working--heading">Working hours</h2>
          <div className="aside__wroking--hours">
            <div className="aside__working--days">
              <p>
                SUN-THUR
                <span className="aside__working--time">16:00 - 21:00</span>
              </p>
            </div>
            <div className="aside__working--days">
              <p>
                FRI-SAT
                <span className="aside__working--time">16:00 - 21:00</span>
              </p>
            </div>
          </div>
        </div>
        <div className="aside__button--book">
          <Button onClick={bookHanlder} className={"btn-book"}>
            book table <BookTable />
          </Button>
        </div>
        <div className="aside__information">
          <p>
            <Phone /> {phone}
          </p>
          <p>
            <Web />
            {webpage}
          </p>
          <p>
            <LocationBlack />
            {location}
          </p>
          <div className="aside__map" />
        </div>
      </aside>
      {activePopup === "book" && <Booking onClose={closePopup} name={name} />}
    </>
  );
};

export default Aside;
