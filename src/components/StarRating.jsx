"use client";
import React from "react";

const StarRating = ({ rating = 0, totalStars = 5 }) => {
  const getStarPercentage = (index) => {
    const starNumber = index + 1;
    if (rating >= starNumber) return 100;
    if (rating < starNumber - 1) return 0;
    return (rating - (starNumber - 1)) * 100;
  };

  return (
    <div className="star-rating flex">
      {[...Array(totalStars)].map((star, index) => (
        <div key={index} className="star-wrapper">
          <svg
            className="star-back"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="#e4e5e9"
          >
            <path d="M12 .587l3.668 7.568L24 9.751l-6 5.864L19.336 24 12 19.856 4.664 24 6 15.615 0 9.751l8.332-1.596L12 .587z" />
          </svg>
          <svg
            className="star-front"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="#ffc107"
            style={{
              width: `${getStarPercentage(index)}%`,
              overflow: "hidden",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <path d="M12 .587l3.668 7.568L24 9.751l-6 5.864L19.336 24 12 19.856 4.664 24 6 15.615 0 9.751l8.332-1.596L12 .587z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default StarRating;
