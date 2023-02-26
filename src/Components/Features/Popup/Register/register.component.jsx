import "./register.styles.scss";
import Input from "../../../Common/InputForm/input";
import Button from "../../../Common/Button/button";
import PopupWrapper from "../../../Common/Popup/popup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, email, password, repeatPassword });
    goToLogin();
  };
  const goToLogin = () => {
    navigate(-1);
  };

  const closeHandler = () => {
    navigate("/");
  };

  return (
    <PopupWrapper onClose={closeHandler} className={`centered`}>
      <form className="register" onSubmit={handleSubmit}>
        <Button onClick={goToLogin} className={`btn-close`} />
        <h1>Welcome to Maratolli</h1>
        <div>
          <label htmlFor="name">Full name</label>
          <Input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Anna Smith"
            type="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="me@maratolli.com"
            type="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="***********"
            type="password"
          />
        </div>
        <div>
          <label htmlFor="password">Repeat password</label>
          <Input
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            placeholder="***********"
            type="password"
          />
        </div>
        <Button type="submit" className={` btn-register | margin`}>
          Register
        </Button>
      </form>
    </PopupWrapper>
  );
};

export default RegisterForm;
