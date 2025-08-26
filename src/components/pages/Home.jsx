import React from 'react'
import Navbar from '../Utils/Navbar'
import Banner from '../Landing/Banner'
import About from '../Landing/About'
import SDG from '../Landing/SDGs'
import Partners from '../Landing/LPartners'
import Contact from '../Landing/Contact'
import Footer from '../Utils/Footer'

const Home = () => {
  return (
    <>
    <Navbar />
    <Banner />
    <About />
    <SDG />
    <Partners />
    <Contact />
    <Footer />
    
    </>
  )
}

export default Home
