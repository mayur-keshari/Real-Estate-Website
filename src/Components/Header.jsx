import React, { useState } from 'react'
import { useDarkMode } from './DarkModeContext'
import {Link} from 'react-scroll'
import {FaCircle, FaBars, FaPhoneAlt, FaUserCircle}  from 'react-icons/fa'
import logo from '../assets/Images/logo.png'

const Header = () => {   
    const { darkMode, toggleDarkMode } = useDarkMode();

    const [isMenuopen, setisMenuopen] = useState(false);

    const toggleMenu=()=>{
      setisMenuopen(!isMenuopen);
    }

    const closeMenu = ()=>{
      setisMenuopen(false);
    }

    const navitems = [
      {
        link:"home", path:"home"
      },
      {
        link:"about", path:"about"
      },
      {
        link:"properties", path:"properties"
      },
      {
        link:"services", path:"services"
      },
      {
        link:"testimonials", path:"testimonials"
      },
      {
        link:"contact", path:"contact"
      },
    ]
  return (
    <nav className={`${darkMode ? 'dark bg-black' : 'light bg-[#f3f3f3]'} flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30`}>
      <div id="logo">
        <img src={logo} alt="company-logo" className='lg:w-[150px] w-[120px] dark:invert'/>
      </div>

      <ul className='lg:flex justify-center items-center gap-8 hidden'>
        {
          navitems.map(({link,path})=>(
            <Link key={path} className='text-black text-[15px] uppercase font-semibold
             cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white'
              to={link} spy={true} offset={-100} smooth={true}>
              {link}
            </Link>
          ))
        }
      </ul>

      {/* mobile menu icon starts here */}
      <div className='flex justify-center items-center lg:hidden' onClick={toggleMenu}>
        <div>
          {isMenuopen ? <FaCircle className="text-black dark:text-white text-2xl cursor-pointer"/> : <FaBars className="text-black dark:text-white text-2xl cursor-pointer"/>}
        </div>
      </div>

      <div className={`${isMenuopen ? 'flex' : 'hidden'} w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`} onClick={closeMenu}>
        <ul className='flex flex-col justify-center items-center gap-2 w-full'>
          {
            navitems.map(({link,path})=>(
              <Link key={path} className='text-white uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-red-600 hover:text-black w-full text-center'
              to={link} spy={true} offset={-100} smooth={true}>
                {link}
              </Link>
            ))
          }
        </ul>
      </div>

      <div className='flex justify-center items-center lg:gap-8 gap-2'>
        <div className='flex justify-center items-center lg:gap-3 gap-1'>
          <FaPhoneAlt className='size-5 text-red-600'/>
          <h1 className='lg:text-xl text-sm text-black dark:text-white font-semibold'>
            930 536 3432
          </h1>
        </div>
        <FaUserCircle className='size-6 text-red-600 '/>
      </div>
    </nav>
  )
}
export default Header