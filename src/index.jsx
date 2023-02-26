import "./global.styles.scss";
import "./mixins.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PopupContextProvider } from "./Context/popup.context";
import { LoginContextProvider } from "./Context/login.context";
import { FormContextProvider } from "./Context/reviews.context";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginContextProvider>
        <PopupContextProvider>
          <FormContextProvider>
            <App />
          </FormContextProvider>
        </PopupContextProvider>
      </LoginContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
