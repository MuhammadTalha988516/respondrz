import React from 'react';
import Navbar from '../Utils/Navbar';
import Banner from '../AboutUs/Banner';
import About from '../AboutUs/About';
import OurValues from '../AboutUs/OurValues';
import OurMission from '../AboutUs/OurMission';
import OurVision from '../AboutUs/OurVision';
import Matters from '../AboutUs/Matters';
import CTA from '../AboutUs/CTA';
import FAQs from '../AboutUs/FAQs';
import Footer from '../Utils/Footer';

const AboutUs = () => {
  return (
    <>
      
      <Navbar />
      <Banner />
      <About />
      <OurMission />
      <OurVision />
      <OurValues />
      <Matters />
      <CTA />
      <FAQs />
      <Footer />
    </>
  );
};

export default AboutUs;
