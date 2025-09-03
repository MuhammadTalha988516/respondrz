import React from 'react'; 
import Navbar from '../Utils/Navbar';
import Banner from "../ContactUs/Banner";
import CTA from "../ContactUs/CTA";
import Form from "../ContactUs/Form";
import Footer from '../Utils/Footer';
import AppAd from '../ContactUs/AppAd';
import PartnershipForm from '../ContactUs/PartnershipForm';

const ContactUs = () => {
  return (
    <>
      
      <Navbar />
      <Banner />
      <CTA />
      <Form />
      <AppAd />
      <PartnershipForm />
      <Footer />
    </>
  );
};

export default ContactUs;
