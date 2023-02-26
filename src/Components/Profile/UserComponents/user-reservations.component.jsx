import "./user-reservations.styles.scss";
import { ReactComponent as PersonIcon } from "../../../Assets/person-icon.svg";
import Button from "../../Common/Button/button";
const UserReservations = () => {
  return (
    <section className="reservations">
      <div className="reservations-wrapper">
        <h1>Pasta Bella</h1>
        <p>20.12.2022 16:40</p>
        <p>
          2 <PersonIcon />
        </p>
        <p>No notes</p>
      </div>
      <Button className={`btn-cancel`}>Cancel</Button>
    </section>
  );
};

export default UserReservations;
