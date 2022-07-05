import { FaCaretLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "./Nav";

const Link = [
  {
    heading: "2022 Complete React Bootcamp Zero to Hero",
    price: "$149.99",
  },
  {
    heading: "2022 Complete Python Bootcamp Zero to Hero",
    price: "$159.99",
  },
  {
    heading: "2022 Complete MERN Bootcamp Zero to Hero",
    price: "$199.99",
  },
  {
    heading: "2022 Complete MERN Bootcamp Zero to Hero",
    price: "$199.99",
  },
];

const Card = ({ data }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="w-[20rem] min-w-14 h-44 bg-white p-8 flex flex-col justify-between rounded-lg shadow-2xl cursor-pointer"
    >
      <h1 className="w-4/5 text-indigo-900 font-bold">{data.heading}</h1>
      {/* star icons */}
      <div className="w-[30px] h-[30px] rounded-[50%] outline grid items-center justify-center outline-1 rotate-180 hover:cursor-pointer">
        <FaCaretLeft size={20} />
      </div>
      <p className="font-bold text-black">{data.price}</p>
    </motion.div>
  );
};

const ECourses = () => {
  return (
    <div className="px-28 w-full h-80">
      <h1 className="text-3xl text-indigo-900 font-semibold">
        World's Largest selection of E-Courses At Your{" "}
        <span className="text-amber-400">Fingertips</span>
      </h1>
      <p className="text-xl text-slate-400 my-5">
        Amazing collection of courses taught by Experienced teachers, Handpicked
        just for you!
      </p>

      <div className="h-full bg-blue-200 rounded-lg shadow-lg shadow-cyan-900/40">
        {/* Nav */}
        <Navbar />
        <div className="grid grid-cols-4 grid-rows-1 w-full h-full items-center px-10">
          {/* Card */}
          {Link.map((link) => (
            <Card data={link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ECourses;