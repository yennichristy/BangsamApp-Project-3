import React from "react";
import ReactWOW from "react-wow";
import logo from "../../../assets/icons/logo-items/bangsam.png";
import plant from "../../../assets/landingPage/Plant6.png";
import plant2 from "../../../assets/landingPage/Plant2.png";
import "../../../assets/styles/LandingPage/footer.scss";

const FooterLayout = () => {
  return (
    <div className="footer">
      <img className="decoration" src={plant} alt="plant"></img>
      <img className="decoration2" src={plant2} alt="plant"></img>
      <div className="footer__top">
        <ReactWOW animation="animateUp" delay={"0.6s"}>
          <img className="footer__top__logo" src={logo} alt="logo"></img>
        </ReactWOW>
      </div>
      <ReactWOW animation="animateUp" delay={"0.7s"}>
        <div className="footer__links">
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>
        </div>
      </ReactWOW>
      <div className="footer__copy-right">
        <ReactWOW animation="animateUp" delay={"0.8s"}>
          <p>Copyright 2020 Bangsam</p>
        </ReactWOW>
      </div>
    </div>
  );
};

export default FooterLayout;
