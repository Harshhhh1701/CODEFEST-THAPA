import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {

    return (
        <nav className='absolute top-0 left-0 w-full h-24 bg-slate-200 flex justify-between items-center px-5 sm:px-16'>
            <span className='font-bold text-lg font-mono'>EduHive</span>
            <ul className='hidden sm:flex items-center font-medium space-x-10 text-slate-500'>
                <li>Home</li>
                <li>Category</li>
                <li>Workshop</li>
                <li>Workshop</li>
                <div className='flex px-24 space-x-16 text-lg'>
                    <button className='text-indigo-900 font-semibold'>
                        Login
                    </button>
                    <button className='bg-indigo-900 text-white px-10 py-5 rounded-xl'>Get Started</button>

                </div>
            </ul>
            <GiHamburgerMenu size={20} className="sm:hidden" />


        </nav>
    )
}

export default Navbar;
