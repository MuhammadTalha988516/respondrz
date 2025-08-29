import React from "react"; 
import ImBan from "../Impact/ImBan";
import ImpactStats from "../Impact/ImpactBanner";
import KeyImpactAreas from "../Impact/RespondrzImpact"
import SectorImpact from "../Impact/FutureSectorImpact"
import Footer from "../Utils/Footer";
import CaseStudy from "../Impact/PartnerNow";
import Navbar from "../Utils/Navbar";
import ISdgs from "../Impact/ISdgs"
import PublicBenefits from "../Impact/PublicBenefits";

const Impact = () => {
  return (
    <>
      <Navbar/>
      <ImBan/>
      <ImpactStats />
      <ISdgs/>
      <PublicBenefits/>
      <KeyImpactAreas />
      <SectorImpact/>
      <CaseStudy/>
      <Footer/>

    </>
  );
}
export default Impact;