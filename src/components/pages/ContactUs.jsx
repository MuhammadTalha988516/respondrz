import React from 'react'
import Navbar from '../Utils/Navbar'
import Banner from "../ContactUs/Banner"
import CTA from "../ContactUs/CTA"
import Form from "../ContactUs/Form"
import Footer from '../Utils/Footer'
import AppAd from '../ContactUs/AppAd'
const ContactUs = () => {
  return (
    <>
    <div>
    <Navbar />
    <Banner />
    <CTA />
    <Form />
    <AppAd />
    <Footer />
    </div>
    
    </>
  )
}

export default ContactUs
