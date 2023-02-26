import React, { createContext, useState } from "react";

const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (email, password) => {
    console.log(email, password);
    if (email === "raitis@raitis" && password === "raitis") {
      console.log(`Login successful`);
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", true);
    } else {
      console.log(`Wrong email or password`);
    }
  };

  return (
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
  );
};

export { LoginContext, LoginContextProvider };
