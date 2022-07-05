import React from 'react'
import Img1 from '../assets/img1.jpg'
import Img4 from '../assets/img4.jfif'

const Courses = () => {
  return (
    <>
    <div className='w-full py-[10rem] px-4  mt-10 '>
        <p className='pb-24 pl-36 font-serif text-3xl font-semibold'>Recently added courses</p>
      <div className='max-w-[1240px] mx-auto grid justify-center md:grid-cols-4 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Img1}  alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Course-1</h2>
              <p className='text-center text-4xl font-bold'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>5 Hours content</p>
                  <p className='py-2 border-b mx-8'>Certificate Granted</p>
                  <p className='py-2 border-b mx-8'>Upto 25% off</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Img4} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Course-2</h2>
              <p className='text-center text-4xl font-bold'>$301</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>5 Hours content</p>
                  <p className='py-2 border-b mx-8'>Certificate Granted</p>
                  <p className='py-2 border-b mx-8'>Upto 25% off</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white'src={Img1}  alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Course-3</h2>
              <p className='text-center text-4xl font-bold'>$301</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>5 Hours content</p>
                  <p className='py-2 border-b mx-8'>Certificate Granted</p>
                  <p className='py-2 border-b mx-8'>Upto 25% off</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Img4} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Course-4</h2>
              <p className='text-center text-4xl font-bold'>$301</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>5 Hours content</p>
                  <p className='py-2 border-b mx-8'>Certificate Granted</p>
                  <p className='py-2 border-b mx-8'>Upto 25% off</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
      </div>
      <div className="flex flex-col pt-5 justify-center items-center">
        <p className='text-2xl font-mono font-semibold'>130000+ online courses available</p>
        <span className='text-blue-600 hover:cursor-pointer'>See all Category</span>
      </div>
    </div>
    </>
  )
}

export default Courses