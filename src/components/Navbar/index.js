import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { BiSearchAlt } from "react-icons/bi";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

const link = [
  {
    text: "Home",
    link: "#1",
  },
  {
    text: "Category",
    link: "#2",
  },
  {
    text: "About",
    link: "#3",
  },
  {
    text: "Contact",
    link: "#4",
  },
];
const Navbar = () => {
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 z-20 w-full h-20 sm:h-24 flex justify-between items-center px-8 sm:px-28">
        <span className="font-bold text-lg sm:text-2xl font-mono">EduHive</span>
        <AnimateSharedLayout transition={{ duration: 0.2 }}>
          <ul className="hidden sm:flex items-center text-xl font-medium space-x-10 text-slate-500">
            {link.map((link, index) => (
              <motion.li
                initial={{ fontSize: "normal" }}
                animate={{ fontSize: "bold", transition: { duration: 2 } }}
                key={index}
                className="relative"
                onClick={() => setSelected(index)}
              >
                <a
                  className={
                    index === selected ? "text-indigo-900 font-semibold" : ""
                  }
                  href={link.link}
                >
                  {link.text}
                </a>
                {index === selected && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-[-2px] left-0 bg-indigo-900 h-[3px] w-full rounded-lg"
                  />
                )}
              </motion.li>
            ))}

            <div className="flex space-x-16 text-lg">
              <SecondaryButton>Login</SecondaryButton>
              <PrimaryButton>Get Started</PrimaryButton>
            </div>
          </ul>
        </AnimateSharedLayout>
        <div className="flex sm:hidden space-x-6">
          <BiSearchAlt size={20} className="sm:hidden" />
          <GiHamburgerMenu
            size={20}
            className="sm:hidden"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-screen h-screen backdrop-blur-lg z-40"
          >
            <ImCross
              onClick={() => setIsOpen(false)}
              className="absolute right-10 top-10 text-blue-700"
            />
            <ul className="flex flex-col justify-center items-center h-full space-y-8 text-xl font-semibold">
              {link.map((link, index) => (
                <li key={index}>
                  <a href={link.link}>{link.text}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
