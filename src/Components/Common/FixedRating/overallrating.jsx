import React from "react";
import "./overall.styles.scss";
import { ReactComponent as EmptyStar } from "../../../Assets/emptystar.svg";
import { ReactComponent as HalfStar } from "../../../Assets/halfstar.svg";
import { ReactComponent as FilledStar } from "../../../Assets/fullstar.svg";

const OverallRating = ({ overall, className }) => {
  const filledStars = Math.floor(overall);
  const hasHalfStar = overall - filledStars >= 0.5;
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

  const filledStarElements = Array.from({ length: filledStars }, (_, i) => (
    <FilledStar key={i} className={`filled-star ${className}`} />
  ));
  const emptyStarElements = Array.from({ length: emptyStars }, (_, i) => (
    <EmptyStar key={i} className={`empty-star ${className}`} />
  ));
  const halfStarElement = hasHalfStar ? (
    <HalfStar className={`half-star ${className}`} />
  ) : null;

  return (
    <div className="overall-rating">
      {filledStarElements}
      {halfStarElement}
      {emptyStarElements}
    </div>
  );
};

export default OverallRating;
