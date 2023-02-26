import { Fragment } from "react";
import ProfileHeader from "../../Components/Header/HeaderComponents/profile-header.component";
import Profile from "../../Components/Profile/profile.component";
import { Outlet } from "react-router-dom";

const ProfilePage = () => {
  return (
    <Fragment>
      <ProfileHeader />
      <Profile />
      <Outlet />
    </Fragment>
  );
};

export default ProfilePage;
