import React from 'react'
import Navbar from '../Utils/Navbar'
import Banner from "../AboutUs/Banner"
import About from '../AboutUs/About'
import OurValues from '../AboutUs/OurValues'
import OurMission from '../AboutUs/OurMission'
import Footer from '../Utils/Footer'
import FAQs from '../AboutUs/FAQs'

const AboutUs = () => {
  return (
   <>
   <Navbar />
   <Banner />
   <About />
   <OurValues />
   <OurMission />
   <FAQs />
   <Footer />
   </>
  )
}

export default AboutUs
