import { Route } from "react-router-dom";
import Reviews from "./Reviews";
import SelectedReview from "./SelectedReview";

function Reviews() {
  return (
    <>
      <Route path="/add-review" element={<Reviews />} />
      <Route path="/add-review/:id" element={<SelectedReview />} />
    </>
  );
}
export default Reviews;
