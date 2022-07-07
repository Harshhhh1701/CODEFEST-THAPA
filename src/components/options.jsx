import React from "react";
import { AiFillMacCommand } from "react-icons/ai";
import { FaReact, FaNodeJs, FaRegNewspaper } from "react-icons/fa";
import optionsBg from "../assets/optionsbg.png";
const Options = () => {
  return (
    <>
      <div className="flex justify-center relative">
        <img src={optionsBg} alt="" />
        <div className="hidden sm:flex absolute text-blue-500 left-[20rem] top-12 bg-white p-5 rounded-3xl shadow-2xl shadow-cyan-500/50 ">
          <FaReact size={100} />
        </div>
        <div className="hidden sm:flex absolute text-blue-500 right-[20rem] top-28 bg-white p-5 rounded-3xl shadow-2xl shadow-cyan-500/50 ">
          <FaNodeJs size={80} />
        </div>
      </div>
      <div className="flex flex-col pl-5 sm:pl-44 sm:pr-72 space-y-14 h-[80vh]  pt-24 ">
        <div className="space-y-5 flex w-full justify-center">
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-blue-900 font-serif">
              The quickest & effective way of Learning
            </p>
            <p className="font-serif">
              {" "}
              The worlds first platform to learn new skills in an effective
              methodology
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-6 sm:flex-row  sm:space-x-10 justify-center sm:h-[35%] ">
          <div className="bg-white space-y-7 shadow-xl h-full sm:w-96 flex items-center  justify-center flex-col hover:scale-105 hover:font-semibold hover:text-lg ">
            <AiFillMacCommand size={30} color="red" />
            <p>1,00,000 online courses</p>
          </div>
          <div className="bg-white space-y-7 shadow-xl h-full sm:w-96 flex items-center justify-center flex-col hover:scale-105 hover:font-semibold hover:text-lg">
            <AiFillMacCommand size={30} color="red" />
            <p>Live introduction</p>
          </div>
          <div className="bg-white space-y-7 shadow-xl h-full sm:w-96 flex items-center justify-center flex-col hover:scale-105 hover:font-semibold hover:text-lg">
            <AiFillMacCommand size={30} color="red" />
            <p>Life time access</p>
          </div>
          <div className="bg-white space-y-7 shadow-xl h-full sm:w-96 flex items-center justify-center flex-col hover:scale-105 hover:font-semibold hover:text-lg">
            <AiFillMacCommand size={30} color="red" />
            <p>Workshop Facilities</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Options;
