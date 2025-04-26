import React from 'react'
import { useDarkMode } from './DarkModeContext'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaBuilding, FaMobile, FaFax, FaArrowUp, FaMoon, FaSun } from 'react-icons/fa'
import { Link } from "react-scroll"
import { IoMdMail } from 'react-icons/io'
import prop7 from '../assets/Images/prop7.jpg'
import prop8 from '../assets/Images/prop8.jpg'
const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <footer className={`${darkMode ? 'dark bg-black' : 'light bg-gray-800'} w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}>
        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold '>About Us</h1>
          <p className='text-slate-200 text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, architecto cupiditate.
            Quibusdam labore voluptates quae unde. Praesentium totam laboriosam perferendis?</p>
          <div id="social-icons" className='flex justify-start items-center gap-4 mt-4'>
            <div className='p-3 rounded-xl bg-white hover:bg-blue-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaFacebook className='size-5' />
            </div>

            <div className='p-3 rounded-xl bg-white hover:bg-pink-800 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaInstagram className='size-5' />
            </div>

            <div className='p-3 rounded-xl bg-white hover:bg-sky-500 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaTwitter className='size-5' />
            </div>

            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaYoutube className='size-5' />
            </div>
          </div>

          <h1 className='text-white mt-8'>Copyright Real Estate, All Right Reserved.</h1>
        </div>
        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>Contact Us</h1>
          <div className='flex justify-center items-center gap-3'>
            <FaBuilding className='text-white size-5' />
            <p className='text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing, ipsum dolor sit.</p>
          </div>

          <div className='flex justify-center items-center gap-3'>
            <FaFax className='text-white size-5' />
            <p className='text-slate-200'>8765 56432</p>
          </div>

          <div className='flex justify-center items-center gap-3'>
            <FaMobile className='text-white size-5' />
            <p className='text-slate-200'>+91 876 6543 678</p>
          </div>

          <div className='flex justify-center items-center gap-3'>
            <IoMdMail className='text-white size-5' />
            <p className='text-slate-200'>realestate@gmail.com</p>
          </div>
        </div>

        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'> Latest Properties</h1>
          <div className='flex justify-center items-center gap-4'>
            <img src={prop7} className='w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300' />
            <div>
              <h1 className='text-md text-white pt-3'>Villa with amazing view</h1>
              <p className='text-slate-400'>$543.65</p>
            </div>
          </div>

          <div className='flex justify-center items-center gap-4'>
            <img src={prop8} className='w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300' />
            <div>
              <h1 className='text-md text-white pt-3'>Smart view from beach</h1>
              <p className='text-slate-400'>$343.65</p>
            </div>
          </div>
        </div>
      </footer>

      {/* slide-to-top-button */}
      <div id="icon-box" className='bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:lg:bottom-12 bottom-6 right-6'>
        <Link to='hero' spy={true} offset={-100} smooth={true} >
        <FaArrowUp className='text-white size-6'/>
        </Link>
      </div>

      <div>
        <button onClick={toggleDarkMode} className='flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6 top-6'>
          {darkMode ? <FaMoon className='size-25 text-black'/> : <FaSun className='size-25 text-black'/>}
        </button>
      </div>
    </>
  )
}

export default Footer