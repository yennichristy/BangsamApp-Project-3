import React from "react";
import Header from "../LandingPage/layout/headerLayout";
import HomePage from "../LandingPage/contents/homePage";
import Features from "../LandingPage/contents/features";
import AboutBangsam from "../LandingPage/contents/aboutBangsam";
import WasteFacts from "../LandingPage/contents/wasteFacts";
import Footer from "../LandingPage/layout/footerLayout";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <WasteFacts />
      <Features />
      <AboutBangsam />
      <Footer />
    </div>
  );
};

export default LandingPage;
