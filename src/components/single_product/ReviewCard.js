import Image from "next/image";
import React, { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { FiStar } from "react-icons/fi";
import { MdVerifiedUser } from "react-icons/md";
import Rating from "react-rating";
import User from "../../images/users/customer.png";
export default function ReviewCard() {
  const [expand, setExpand] = useState(false);
  const desc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque et id at explicabo tenetur, repellendus libero molestiae fugiat corrupti soluta recusandae. Voluptate itaque, dolores, reprehenderit minima error cum beatae veritatis vero voluptates iusto ut! Sint, rem aperiam fuga numquam doloribus temporibus rerum quibusdam aliquam delectus laborum soluta, magni voluptate?";

  return (
    <>
      <div className="review_card_wrapper border-b-1 border-b-slate-100 py-1.5">
        <div className="review_card_header flex justify-between">
          <div className="flex">
            <div className="customer_image mx-2">
              <Image
                src={User}
                alt="pic"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="customer_info mx-5">
              <h3 className="customer_name flex">
                by Mehedi
                <span className="text-green text-semi_medium mx-5">
                  <MdVerifiedUser />
                </span>
              </h3>
              <span className="text-green text-light  my-2 block">
                <Rating
                  initialRating={4.5}
                  readonly
                  emptySymbol={<FiStar />}
                  fullSymbol={<BsFillStarFill />}
                />
              </span>
            </div>
          </div>
          <div>10 sep 2022</div>
        </div>
        <div className="review_card_header">
          {!expand && (
            <>
              <p className="text-sm my-2 inline">{desc.slice(0, 120)}...</p>
              <button
                className="text-orangee tracking-wider mx-2 cursor-pointer hover:text-black hover:duration-300"
                onClick={() => setExpand(true)}
              >
                Seemore
              </button>
            </>
          )}
          {expand && (
            <>
              <p className="text-sm my-2 inline">{desc}</p>

              <button
                className="text-orangee tracking-wider mx-2 cursor-pointer hover:text-black hover:duration-300"
                onClick={() => setExpand(false)}
              >
                Seeless
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
