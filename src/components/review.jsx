import React from "react";
import { GiStarSwirl } from "react-icons/gi";
import reView from "../assets/review.png";
const Review = () => {
  return (
    <>
      <div
        id="5"
        className="flex justify-center md:items-center flex-col md:flex-row bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-full"
      >
        <div className="font-sans text-3xl pt-5 px-8 sm:text-5xl sm:px-28 font-bold sm:w-1/2 ">
          See what our students are saying about us
          <div className="flex items-center justify-center pt-28">
            <GiStarSwirl size={150} color="00df9a" />
          </div>
        </div>
        <div className="flex flex-col mt-8 mb-8 rounded-2xl overflow-hidden">
          <img src={reView} alt="" />
        </div>
      </div>
    </>
  );
};

export default Review;
