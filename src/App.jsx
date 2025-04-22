import React from 'react'
import { DarkModeProvider } from './Components/DarkModeContext'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Popularareas from './sections/Popularareas'
import Properties from './sections/Properties'
import Services from './sections/Services'
import Client from './sections/Client'
import Contact from './sections/Contact'
const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <Popularareas />
        <Properties />
        <Services />
        <Client />
        <Contact />
        <Footer />
      </DarkModeProvider>
    </>
  )
}

export default App