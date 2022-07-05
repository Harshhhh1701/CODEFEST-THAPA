import React from 'react'

const Pricing = () => {
    const arr=new Array(1,2,3);
  return (
    <>
        
        <div className="flex mt-20 bg-blue-200 mx-10 items-center rounded-md">
            <div className="flex space-x-8 w-full h-screen items-center pt-8 mx-8 ">
                {arr.map((item,id)=>(
                    <div key={id} className="flex bg-white h-1/2 w-1/4 flex-col justify-center items-center">
                    <div key={id} className="bg-slate-300 h-3 w-36 mx-24 mt-3">

                    </div>
                    <div key={id} className="bg-slate-300 h-2 w-52 mx-16 mt-3"></div>
                    <div key={id} className="bg-slate-300 h-2 w-52 mx-16 mt-3"></div>
                    <div key={id} className="bg-slate-300 h-2 w-52 mx-16 mt-3"></div>
                    <div key={id} className="bg-slate-200 h-32 w-52 mx-16 mt-5"></div>
                    <div key={id} className="bg-slate-300 h-6 w-24 mx-32 mt-12 rounded-lg"></div>

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
            <div className=' pt-8 text-lg font-sans font-semibold'>
                <p>Our pricing plans</p>
                <p>Great ready to learn</p>
                <p>Grow your network</p>
                <p>Start your one month free trial now!</p>
            </div>
        </div>
    </>
  )
}

export default Pricing