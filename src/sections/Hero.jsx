import React, { useEffect } from 'react'
import {  useDarkMode } from '../Components/DarkModeContext'
import heroimg from '../assets/Images/hero1.webp'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Hero = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }, [])
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <div className={`${darkMode ? 'dark bg-black' : 'light bg-white'}`}>
        <section id="hero" className='w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start px
        lg:px-28 px-10 gap-7 z-20' style={{ backgroundImage: `url(${heroimg})` }}>
          <h1 data-aos="zoom-in" className='text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]'>Find your next home in Las Vegas</h1>
          <p data-aos="zoom-in" className='text-white text-xl lg:pr-[500px] pr-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sapiente,
            doloremque quaerat totam qui quis eaque esse temporibus eum tempore?</p>
        </section>

      </div>

      <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} z-10`}>
        <div data-aos="zoom-in" id="form" className={`${darkMode ? 'dark bg-black' : 'light bg-white'} lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14`}>
          <div className='w-full '>
            <h1 className='text-black font-semibold dark:text-white'>LOCATION</h1>
            <input type="text" placeholder='Enter an Address, State, City or Pincode' className='bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]' />
          </div>

          <div className='w-full'>
            <h1 className='text-black font-semibold dark:text-white'>TYPE</h1>
            <select name="selectOption" id="selectOption" className='bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md'>
              <option value="" disabled selected>Select Property</option>
              <option value="option 1">Rentals</option>
              <option value="option 2">Sales</option>
              <option value="option 3">Commercial</option>
            </select>
          </div>

          <div className='w-full'>
            <h1 className='text-black font-semibold dark:text-white'>CATEGORY</h1>
            <select name="selectOption" id="selectOption" className='bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md'>
              <option value="" disabled selected>Property Category</option>
              <option value="option 1">Apartments</option>
              <option value="option 2">Duples</option>
              <option value="option 3">Condos</option>
              <option value="option 3">Condos</option>
              <option value="option 3">Condos</option>
            </select>
          </div>

          <div className='w-full'>
            <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl
             cursor-pointer transform hover:scale-105 transition-transform-duration-300'>SUBMIT</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero