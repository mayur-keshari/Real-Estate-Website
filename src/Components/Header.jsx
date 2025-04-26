import React, { useState } from 'react'
import { useDarkMode } from './DarkModeContext'
import {Link} from 'react-scroll'
import {FaMarker, FaBars, FaPhoneAlt, FaUserCircle}  from 'react-icons/fa'
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
        link:"About", path:"about"
      },
      {
        link:"Properties", path:"properties"
      },
      {
        link:"services", path:"services"
      },
      {
        link:"Testimonials", path:"testimonials"
      },
      {
        link:"Contact", path:"contact"
      },
    ]
  return (
    <div></div>
  )
}

export default Header