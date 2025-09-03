import React from "react";
import Navbar from "../Utils/Navbar";
import ImBan from "../Impact/ImBan";
import ImpactStats from "../Impact/ImpactBanner";
import ISdgs from "../Impact/ISdgs";
import PublicBenefits from "../Impact/PublicBenefits";
import KeyImpactAreas from "../Impact/RespondrzImpact";
import SectorImpact from "../Impact/FutureSectorImpact";
import CaseStudy from "../Impact/PartnerNow";
import Footer from "../Utils/Footer";

const Impact = () => {
  return (
    <>
      
      <Navbar />
      <ImBan />
      <ImpactStats />
      <ISdgs />
      <PublicBenefits />
      <KeyImpactAreas />
      <SectorImpact />
      <CaseStudy />
      <Footer />
    </>
  );
};

export default Impact;
