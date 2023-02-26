import "./login.styles.scss";

import PopupWrapper from "../../../Common/Popup/popup";
import Input from "../../../Common/InputForm/input";
import Button from "../../../Common/Button/button";
import Logo from "../../../../Assets/logo.svg";
import { useState, React, useContext } from "react";
import { LoginContext } from "../../../../Context/login.context";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useContext(LoginContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(email, password);
    closeHandler();
  };

  const closeHandler = () => {
    navigate(-1);
  };

  return (
    <PopupWrapper className={`centered`}>
      <form className="login" onSubmit={handleSubmit}>
        <Button onClick={closeHandler} className={`btn-close`} />
        <div className="login-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="login-input-wrapper">
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="login-btn-wrapper">
          <Button className={`btn-login-2`} type={`submit`}>
            Log in
          </Button>
          <p>Don't have an account yet?</p>
          <Link to={`/register`} className={`btn-register`}>
            Register
          </Link>
        </div>
      </form>
    </PopupWrapper>
  );
};

export default LoginForm;
