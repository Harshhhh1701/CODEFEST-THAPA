import Input from "./Input";
import Hero from "../../assets/hero.jpg";
import { FaThumbsUp, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import PrimaryButton from "../PrimaryButton";

const spanVariants = {
  initial: {
    opacity: 0,
    translateX: -10,
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
  },
  animate: {
    opacity: 1,
    translateX: 0,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const HeroSection = () => {
  return (
    <div className="h-screen w-screen grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center">
      <div className="  sm:ml-28">
        <h1 className="text-xl sm:text-7xl font-bold uppercase sm:relative text-indigo-900 tracking-wider text-shadow-md">
          <motion.span
            variants={spanVariants}
            initial="initial"
            animate={"animate"}
          >
            Grow your
          </motion.span>{" "}
          <motion.span
            variants={spanVariants}
            initial="initial"
            animate={"animate"}
            className="text-amber-400"
          >
            career
          </motion.span>
          <br />
          <motion.span
            variants={spanVariants}
            initial="initial"
            animate={"animate"}
          >
            {" "}
            with Quality{" "}
          </motion.span>
          <motion.span
            variants={spanVariants}
            initial="initial"
            animate={"animate"}
            className="text-amber-400"
          >
            Education
          </motion.span>
          <div className="bg-red-900 absolute top-0 left-0 w-full h-full blur-[40px] opacity-20 rounded-lg -z-1" />
          <div className="flex justify-center mt-8"><PrimaryButton>Get Started</PrimaryButton></div>
        </h1>
        <div className="hidden sm:flex"><Input /></div>
      </div>

      <div className="hidden sm:flex h-full justify-center relative w-full">
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
