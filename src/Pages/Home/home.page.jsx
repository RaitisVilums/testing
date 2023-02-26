import Header from "../../Components/Header/header.component";
import MainPage from "../../Components/Main/main.component";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <MainPage />
      <Outlet />
    </Fragment>
  );
};

export default HomePage;
