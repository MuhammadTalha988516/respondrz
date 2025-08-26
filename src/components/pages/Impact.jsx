import React from "react"; 
import ImBan from "../Impact/ImBan";
import ImpactStats from "../Impact/ImpactBanner";
import KeyImpactAreas from "../Impact/RespondrzImpact"
import SectorImpact from "../Impact/SectorImpact"
import Footer from "../Utils/Footer";
import CaseStudy from "../Impact/PartnerNow";
import Navbar from "../Utils/Navbar";

const Impact = () => {
  return (
    <>
      <Navbar/>
      <ImBan/>
      <ImpactStats />
      <KeyImpactAreas />
      <SectorImpact/>
      <CaseStudy/>
      <Footer/>

    </>
  );
}
export default Impact;