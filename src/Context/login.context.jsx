import React, { createContext, useState } from "react";
import Notification from "../Components/Features/Popup/Notification/notification.popup";

export const LoginContext = createContext();

export const LoginContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (email, password) => {
    console.log(email, password);
    if (email === "raitis@raitis" && password === "raitis") {
      console.log(`Login successful`);
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", true);
      setMessage("Login successful!");
    } else {
      console.log(`Wrong email or password`);
    }
  };

  const handleClearMessage = () => {
    setMessage("");
  };

  return (
    <>
      {message && (
        <Notification message={message} onClearMessage={handleClearMessage} />
      )}
      <LoginContext.Provider
        value={{
          isLoggedIn,
          email,
          setEmail,
          password,
          setPassword,
          handleLogin,
        }}
      >
        {props.children}
      </LoginContext.Provider>
    </>
  );
};
