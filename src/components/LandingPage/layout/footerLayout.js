import React from "react";
import logo from "../../../assets/icons/logo-items/bangsam.png";
import "../../../assets/styles/LandingPage/footer.scss";

const FooterLayout = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer__top">
          <img className="footer__top__logo" src={logo} alt="logo"></img>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default FooterLayout;
