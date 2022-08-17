import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { FiStar } from "react-icons/fi";
import Rating from "react-rating";

export default function AverageReview() {
  return (
    <>
      <div className="average_rating_wrapper">
        <div className="average_rating">
          <h1 className="text-black2 text-big">
            4.5<span className="text-black4 text-semi_medium">/5</span>
          </h1>

          <div className="all_rating">
            <Rating
              initialRating={4.5}
              readonly
              emptySymbol={<FiStar />}
              fullSymbol={<BsFillStarFill />}
            />

            <p>24 Ratings</p>
          </div>
        </div>
        <div className="separate_rating"></div>
      </div>
    </>
  );
}
