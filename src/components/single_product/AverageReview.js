import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { FiStar } from "react-icons/fi";
import Rating from "react-rating";

export default function AverageReview() {
  return (
    <>
      <div className="average_rating_wrapper">
        <div className="average_rating">
          <div className="overflow-hidden">
            <h1 className="text-black2 text-big my-5">
              4.5<span className="text-black4 text-semi_medium">/5</span>
            </h1>

            <span className="text-green text-medium  my-5 block">
              <Rating
                initialRating={4.5}
                readonly
                emptySymbol={<FiStar />}
                fullSymbol={<BsFillStarFill />}
              />
            </span>

            <p>24 Ratings</p>
          </div>
        </div>
      </div>
    </>
  );
}
