import { BiSearchAlt } from "react-icons/bi";
import PrimaryButton from "../PrimaryButton";
const Input = () => {
  return (
    <div className="bg-white rounded-xl pl-5 shadow-2xl  shadow-cyan-700/40 relative z-2 h-16 w-4/5 mt-16 flex justify-between items-center">
      {/*  */}
      <div className="flex items-center ">
        <BiSearchAlt size={30} />
        <input
          className="ml-5 focus:outline-none"
          placeholder="Search for course"
        />
      </div>
      <select className="rounded-lg block px-5 h-full bg-clip-padding  transition ease-in-out m-0 focus:outline-none">
        <option>UI Design</option>
        <option>Front-End</option>
        <option>Back-End</option>
        <option>DS/Algo</option>
      </select>
      <PrimaryButton className="uppercase"> Search</PrimaryButton>
    </div>
  );
};

export default Input;
