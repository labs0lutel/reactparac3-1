import React from "react";

function Stars({ rating }) {
  const totalStars = 5;
  const activeStars = Math.round(rating);

  return (
    <div className="stars">
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={`fa fa-star ${index < activeStars ? "active" : ""}`}
        ></span>
      ))}
    </div>
  );
}

export default Stars;
