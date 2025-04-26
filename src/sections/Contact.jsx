import React from 'react'
import { useDarkMode } from '../Components/DarkModeContext'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Contact = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
  })
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (

    <>
      <div className={`${darkMode ? "dark: bg-black" : "light bg-transparent"} pb-20`}>
        <section id="content" className={`${darkMode ? "dark: bg-gray-800" : "light bg-red-100"} lg:w-[95%] w-full m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center
      items-center lg:px-36 px-6 py-20 gap-10`}>
          <div data-aos="zoom-in" className='bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-4 rounded-xl'>
            <h1 className='text-2xl text-black font-semibold dark:text-white'>Send us message today</h1>
            <input type="text" placeholder="Enter your full name here" className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl' />
            <input type="email" placeholder="Enter your valid email" className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl' />
            <input type="number" placeholder="Enter your valid number" className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl' />
            <textarea cols="30" rows="5" placeholder="Enter your message here..." className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl'/>
            <button className='bg-red-600 w-full text-md px-8 py-3 text-white rounded-xl font-semibold hover:bg-black dark:hover:bg-red-700'>SEND EMAIL</button>
          </div>

          <div className='flex flex-col justify-center items-start gap-8 lg:p-20 p-6'>
            <h1 data-aos="zoom-in" data-aos-delay="200" className='font-medium text-red-500 dark:text-white'>REACH US</h1>
            <h1 data-aos="zoom-in" data-aos-delay="400" className='text-black text-[40px] font-semibold leading-10 dark:text-white'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, nemo?
              <p data-aos="zoom-in" data-aos-delay="600" className='text-xl text-gray-600 text-justify pt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere molestiae repellat odit repellendus consectetur facilis quas architecto minus labore vel.</p>
            </h1>
            <button data-aos="zoom-in" data-aos-delay="600"className='bg-red-600 text-md px-8 py-3 text-white rounded-xl font-semibold hover:bg-black dark:hover:bg-red-700 cursor-pointer'>SEND EMAIL</button>
          </div>
        </section>
      </div>
    </>
  )
}
export default Contact