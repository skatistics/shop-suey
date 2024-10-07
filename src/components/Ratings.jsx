import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

export default function Ratings({ rating = 0, starSize = 16 }) {
  useEffect(() => {
    const ratingContainer = document.getElementById("rating-container");
    const inputRating = document.getElementById("input-rating");
    const stars = document.querySelectorAll(".star");
    const percentage = Math.round((rating / 5) * 100);
    ratingContainer.style.width = `${starSize * 5}px`;
    ratingContainer.style.height = `${starSize}px`;
    stars.forEach((star) => {
      star.style.width = `${starSize}px`;
      star.style.height = `${starSize}px`;
    });
    inputRating.style.width = `${percentage}%`;
    console.log(starSize);
  }, [rating, starSize]);

  return (
    <div className={"relative"} id="rating-container">
      <div
        className="absolute top-0 left-0 h-full overflow-hidden whitespace-nowrap leading-[0] text-[0]"
        id="input-rating"
      >
        {[...Array(5)].map((star, index) => {
          return (
            <FaStar
              className="inline-block star text-ct-4E7E4E"
              key={`rating-${index}`}
            />
          );
        })}
      </div>
      <div
        className="absolute top-0 left-0 h-full overflow-hidden leading-[0] text-[0]"
        id="total-rating"
      >
        {[...Array(5)].map((star, index) => {
          return (
            <FaRegStar
              className="inline-block star text-ct-4E7E4E "
              key={`total-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
}
