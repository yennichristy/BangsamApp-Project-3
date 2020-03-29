import React from "react";
import logo from "../../../assets/icons/logo-items/bangsam.png";
import download from "../../../assets/landingPage/download2.png";
import plant from "../../../assets/landingPage/Plant6.png";
import plant2 from "../../../assets/landingPage/Plant2.png";
import "../../../assets/styles/LandingPage/footer.scss";

const FooterLayout = () => {
  return (
    <div>
      <div className="footer">
        <img className="decoration" src={plant} alt="plant"></img>
        <img className="decoration2" src={plant2} alt="plant"></img>
        <div className="footer__top">
          <img className="footer__top__logo" src={logo} alt="logo"></img>
        </div>
        <div className="footer__links">
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>
        </div>
        <div className="footer__download">
          <p>Join us on</p>
          <img
            className="footer__download__google"
            src={download}
            alt="Google Play"
          ></img>
        </div>
        <div className="footer__copy-right">
          <p>© 2020 Bangsam</p>
        </div>
      </div>
    </div>
  );
};

export default FooterLayout;
