import React from 'react'
import Navbar from '../Utils/Navbar'
import Banner from '../Landing/Banner'
import Abanner from '../Landing/Abanner'
import About from '../Landing/About'
import SDG from '../Landing/SDGs'
import Partners from '../Landing/LPartners'
import Contact from '../Landing/Contact'
import Footer from '../Utils/Footer'
import BuymeCoffee from '../Landing/BuymeCoffee'
import AmbulanceService from '../Landing/AmbulanceService'

const Home = () => {
  return (
    <>
    <Navbar />
    <Banner />
    <Abanner />
    <About />
    <AmbulanceService />
    <SDG />
    <Partners />
    <BuymeCoffee />
    <Contact />
    <Footer />
    
    </>
  )
}

export default Home;
