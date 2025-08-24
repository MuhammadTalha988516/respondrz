import React from "react"; 
import ImBan from "../Impact/ImBan";
import ImpactStats from "../Impact/ImpactStats";
import KeyImpactAreas from "../Impact/KeyImpactAreas"
import VisionSection from "../Impact/VisionSection"
import Footer from "../Utils/Footer";
import CaseStudy from "../Impact/CaseStudy";
import Navbar from "../Utils/Navbar";

const Impact = () => {
  return (
    <>
      <Navbar/>
      <ImBan/>
      <ImpactStats />
      <KeyImpactAreas />
      <CaseStudy/>
      <VisionSection />
      <Footer/>

    </>
  );
}
export default Impact;