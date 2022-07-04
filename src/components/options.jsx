import React from 'react'
import { AiFillMacCommand } from 'react-icons/ai';
const Options = () => {
    return (
        <div className='flex flex-col pl-44 pr-72 space-y-14'>
            <div className='space-y-5'>
                <p className='text-3xl font-bold text-blue-900 font-serif'>The quickest & effective way of Learning</p>
                <p className='font-serif'> The worlds first platform to learn new skills in an effective methodology</p>
            </div>
            <div className="flex flex-row  space-x-10 ">
                <div className='bg-white space-y-7 shadow-xl h-36 w-96 flex items-center flex-col hover:scale-105 hover:font-semibold hover:text-lg'>
                    <AiFillMacCommand size={30} color="red" />
                    <p>1,00,000 online courses</p>
                </div>
                <div className='bg-white space-y-7 shadow-xl h-36 w-96 flex items-center flex-col hover:scale-105 hover:font-semibold hover:text-lg'>
                    <AiFillMacCommand size={30} color="red"/>
                    <p>Live introduction</p>
                </div>
                <div className='bg-white space-y-7 shadow-xl h-36 w-96 flex items-center flex-col hover:scale-105 hover:font-semibold hover:text-lg'>
                    <AiFillMacCommand size={30} color="red"/>
                    <p>Life time access</p>
                </div>
                <div className='bg-white space-y-7 shadow-xl h-36 w-96 flex items-center flex-col hover:scale-105 hover:font-semibold hover:text-lg'>
                    <AiFillMacCommand size={30} color="red"/>
                    <p>Workshop  Facilities</p>
                </div>
            </div>
        </div>
    )
}

export default Options