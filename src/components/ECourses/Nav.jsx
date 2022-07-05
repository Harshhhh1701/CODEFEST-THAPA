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
    <nav className="translate-y-10 translate-x-10 w-[30%]">
      <AnimateSharedLayout>
        <ul className="grid grid-cols-5 grid-rows-1 hover:cursor-pointer">
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
