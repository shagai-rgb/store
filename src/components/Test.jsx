"use client";
import React from "react";
import StarRating from "./ScrollPage";

const RatingPage = () => {
  return (
    <div className="flex">
      <h1>Product Ratings</h1>
      <p>Rating: 3.4</p>
      <StarRating rating={3} />

      <p>Rating: 4.5</p>
      <StarRating rating={4.5} />

      <p>Rating: 3.1</p>
      <StarRating rating={3.1} />

      <p>Rating: 2.2</p>
      <StarRating rating={2.2} />
    </div>
  );
};

export default RatingPage;
