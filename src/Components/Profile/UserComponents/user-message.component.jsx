import "./user-message.styles.scss";
import { ReactComponent as MessageIcon } from "../../../Assets/profile-message.svg";
import Button from "../../Common/Button/button";

const UserMessages = () => {
  return (
    <section className="messages">
      <h1>Welcome to Maratolli</h1>
      <Button className={`btn-message`}>
        <MessageIcon />
      </Button>
    </section>
  );
};

export default UserMessages;
