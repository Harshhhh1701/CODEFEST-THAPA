import Input from "./Input";
import Hero from "../../assets/hero.jpg";
import { FaThumbsUp, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="h-screen w-screen grid grid-cols-2 items-center justify-items-center">
      <div className="ml-28">
        <h1 className="text-7xl font-bold uppercase relative text-indigo-900 tracking-wider text-shadow-md">
          Grow your <span className="text-amber-400">career</span> with Quality
          <span className="text-amber-400">Education</span>
          <div className="bg-red-900 absolute top-0 left-0 w-full h-full blur-[40px] opacity-20 rounded-lg -z-1" />
        </h1>
        <Input />
      </div>

      <div className="flex h-full justify-center relative w-full">
        <img src={Hero} alt="Hero" className="object-cover image w-full" />
        <div className="absolute inset-28 bg-blue-800 rounded-full blur-[80px] opacity-40" />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.2,
              type: "tween",
              duration: 1,
            },
          }}
          whileHover={{
            cursor: "pointer",
            scale: 1.05,
            transition: {
              duration: 0.2,
            },
          }}
          className="absolute bottom-[15rem] right-[10rem] z-40 bg-white rounded-xl p-5 shadow-xl shadow-cyan-700/30"
        >
          <FaThumbsUp size={80} className="text-blue-700" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 1,
              duration: 1,
            },
          }}
          whileHover={{
            cursor: "pointer",
            scale: 1.05,
            transition: {
              duration: 0.2,
            },
          }}
          className="absolute bottom-[18rem] left-[10rem] z-40 bg-white p-5 rounded-xl shadow-xl shadow-cyan-900/30"
        >
          <FaHeart size={80} className="text-blue-600" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
