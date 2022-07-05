import React from 'react'
import { AiFillMacCommand } from 'react-icons/ai';
import optionsBg from "../assets/optionsbg.png"
const Options = () => {
    return (
        <><div className='h-24'><img src={optionsBg} alt="" /></div>
        <div className='flex flex-col pl-44 pr-72 space-y-14 h-[80vh] pt-24 '>
            
            <div className='space-y-5 flex w-full '>
                <div><p className='text-3xl font-bold text-blue-900 font-serif'>The quickest & effective way of Learning</p>
                <p className='font-serif'> The worlds first platform to learn new skills in an effective methodology</p></div>
                
            </div>
            <div className="flex flex-row  space-x-10 justify-center h-[35%] ">
                <div className='bg-white space-y-7 shadow-xl h-full w-96 flex items-center  justify-center flex-col hover:scale-105 hover:font-semibold hover:text-lg '>
                    <AiFillMacCommand size={30} color="red" />
                    <p>1,00,000 online courses</p>
                </div>
                <div className='bg-white space-y-7 shadow-xl h-full w-96 flex items-center justify-center flex-col hover:scale-105 hover:font-semibold hover:text-lg'>
                    <AiFillMacCommand size={30} color="red"/>
                    <p>Live introduction</p>
                </div>
                <div className='bg-white space-y-7 shadow-xl h-full w-96 flex items-center justify-center flex-col hover:scale-105 hover:font-semibold hover:text-lg'>
                    <AiFillMacCommand size={30} color="red"/>
                    <p>Life time access</p>
                </div>
                <div className='bg-white space-y-7 shadow-xl h-full w-96 flex items-center justify-center flex-col hover:scale-105 hover:font-semibold hover:text-lg'>
                    <AiFillMacCommand size={30} color="red"/>
                    <p>Workshop  Facilities</p>
                </div>
            </div>
           
        </div></>
    )
}

export default Options