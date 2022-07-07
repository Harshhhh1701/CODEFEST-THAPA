import { AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
const links = [
  {
    text: "Python",
  },
  {
    text: "JavaScript",
  },
  {
    text: "ReactJS",
  },
  {
    text: "NodeJS",
  },
  {
    text: "UI/UX",
  },
];

const Navbar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <nav className="sm:translate-y-10 sm:translate-x-10 w-[85%] sm:w-[30%] overflow-scroll sm:overflow-hidden py-5 sm:py-0 px-5 sm:px-0">
      <AnimateSharedLayout>
        <ul className="grid grid-cols-5 grid-rows-1 hover:cursor-pointer min-w-[400px]">
          {links.map((item, id) => {
            return (
              <motion.span
                className={
                  id === selected
                    ? "font-bold text-indigo-900"
                    : "text-slate-600"
                }
                onClick={() => setSelected(id)}
                key={id}
              >
                {item.text}
                {id === selected && (
                  <motion.div
                    layoutId="underline"
                    className="w-3/5 h-1 bg-indigo-900 rounded-3xl"
                  />
                )}{" "}
              </motion.span>
            );
          })}
        </ul>
      </AnimateSharedLayout>
    </nav>
  );
};
export default Navbar;
