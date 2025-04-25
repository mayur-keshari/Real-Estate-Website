import React, { useEffect } from 'react'
import { useDarkMode } from '../Components/DarkModeContext'
import area1 from '../assets/Images/area1.jpg'
import area2 from '../assets/Images/area2.jpg'
import area3 from '../assets/Images/area3.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Popularareas = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
        <section className={`${darkMode ? 'dark bg-gray-800' : 'light bg-red-100'} lg:w-[90%]
       w-full h-fit bg-cover bg-center m-auto rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20 mt-20`}>
          <div id="top" className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>
            <div>
              <h1 data-aos="zoom-in" className='text-red-500 dark:text-white font-medium'>POPULAR AREAS</h1>
              <h1 data-aos="zoom-in" className='text-black text-[40px] font-semibold leading-10 mt-4 dark:text-white'>Explore Most <br></br>POPULAR AREAS</h1>
            </div>

            <div className='grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6'>
                 <div data-aos="zoom-in" data-aos-delay="400" style={{backgroundImage:`url(${area1})`}} className='h-[400px] bg-cover bg-center rounded-xl'></div>
                 <div data-aos="zoom-in" data-aos-delay="600" style={{backgroundImage:`url(${area2})`}} className='h-[400px] bg-cover bg-center rounded-xl'></div>
                 <div data-aos="zoom-in" data-aos-delay="800" style={{backgroundImage:`url(${area3})`}} className='h-[400px] bg-cover bg-center rounded-xl'></div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Popularareas