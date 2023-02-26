import { Route, Routes } from "react-router-dom";

import HomePage from "./Pages/Home/home.page";
import ProfilePage from "./Pages/Profile/profile.page";
import LoginForm from "./Components/Features/Popup/Login/login.component";
import RegisterForm from "./Components/Features/Popup/Register/register.component";
import Reviews from "./Components/Reviews/reviews.component";
import SelectedReview from "./Components/Reviews/selected-review.component";
import Favorites from "./Components/Favorites/favorites.component";
import Restaurant from "./Components/Restaurant/restaurant.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="add-review" element={<Reviews />} />
        <Route path="add-review/:id" element={<SelectedReview />} />
        <Route path="favorite" element={<Favorites />} />
      </Route>
      <Route path="/my-profile" element={<ProfilePage />}>
        <Route path="add-review" element={<Reviews />} />
        <Route path="add-review/:id" element={<SelectedReview />} />
        <Route path="favorite" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
