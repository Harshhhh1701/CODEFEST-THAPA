import React from "react";

const Pricing = () => {
  const arr = new Array([1, 2, 3]);
  return (
    <>
      <div
        id="6"
        className="flex bg-blue-200 h-screen  rounded-md items-center"
      >
        <div className="hidden sm:flex space-x-8 h-8/10 w-full items-center mx-8 justify-evenly">
          {arr.map((item, id) => (
            <div
              key={id}
              className="flex bg-white h-full w-1/4 flex-col justify-center items-center rounded-lg shadow-2xl shadow-cyan-500/50"
            >
              <div className="bg-slate-300 h-3 w-36 mx-24 mt-3"></div>
              <div className="bg-slate-300 h-2 w-52 mx-16 mt-3"></div>
              <div className="bg-slate-300 h-2 w-52 mx-16 mt-3"></div>
              <div className="bg-slate-300 h-2 w-52 mx-16 mt-3"></div>
              <div className="bg-slate-200 h-32 w-52 mx-16 mt-5"></div>
              <div className="bg-slate-300 h-6 w-24 mx-32 mt-6 mb-4 rounded-lg"></div>
            </div>
          ))}

          {/* <div className="flex bg-white h-1/2 w-1/4 flex-col justify-center items-center">
                    <div className="bg-slate-300 h-3 w-36 mx-24 mt-3">

                    </div>
                    <div className="bg-slate-300 h-2 w-52 mx-16 mt-3"></div>
                    <div className="bg-slate-300 h-2 w-52 mx-16 mt-3"></div>
                    <div className="bg-slate-300 h-2 w-52 mx-16 mt-3"></div>
                    <div className="bg-slate-200 h-32 w-52 mx-16 mt-5"></div>
                    <div className="bg-white h-6 w-24 mx-32 mt-12 rounded-lg border-solid border-2 border-slate-400"></div>
                </div>
                <div className="flex bg-white h-1/2 w-1/4 flex-col justify-center items-center">
                    <div className="bg-slate-300 h-3 w-36 mx-24 mt-3">

                    </div>
                    <div className="bg-slate-300 h-2 w-52 mx-16 mt-3"></div>
                    <div className="bg-slate-300 h-2 w-52 mx-16 mt-3"></div>
                    <div className="bg-slate-300 h-2 w-52 mx-16 mt-3"></div>
                    <div className="bg-slate-200 h-32 w-52 mx-16 mt-5"></div>
                    <div className="bg-white h-6 w-24 mx-32 mt-12 rounded-lg border-solid border-2 border-slate-400"></div>
                </div> */}
        </div>
        <div className="px-8 pt-8 text-lg font-sans w-full font-semibold">
          <h1 className="text-xl font-medium">Our pricing plans</h1>
          <p className="text-5xl font-bold text-indigo-900">
            Great ready to learn
          </p>
          <p className="text-3xl font-bold mb-5">Grow your network</p>
          <p className="font-normal underline cursor-pointer">
            Start your one month free trial now!
          </p>
        </div>
      </div>
    </>
  );
};

export default Pricing;
