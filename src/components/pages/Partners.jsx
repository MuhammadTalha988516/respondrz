import React from "react"
import BannerSection from "../Partners/BannerSection";
import WhyUs from "../Partners/WhyUs";
import OurPartners from "../Partners/OurPartners";
import Noble from "../Partners/Noble";
import Footer from "../Utils/Footer";
import Navbar from "../Utils/Navbar";

const Partners = () =>{

return (
    <>
    <Navbar/>
    <BannerSection/>
    <WhyUs/>
    <OurPartners/>
    <Noble/>
    <br />
    <Footer/>
    </>
);
}

export default Partners;