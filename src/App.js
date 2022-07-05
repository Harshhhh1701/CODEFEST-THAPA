import React from 'react'
import Courses from './components/courses'
import './App.css';
import HeroSection from './components/HeroContent';
import Navbar from './components/Navbar';

import Options from './components/options'
import Review from './components/review'

const App = () => {
  return (
    <>
    <main className='relative w-full min-h-screen box-border bg-blue-50 font-sans'>
      <Navbar />
      <HeroSection />
    
    <Options/>
    <Courses/>
    <Review/>
    </main>
    </>
  )
    
  
}

export default App