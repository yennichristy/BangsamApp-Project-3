import React, { useState, useEffect } from "react";
import "../../../assets/styles/LandingPage/header.scss";
import { Button } from "antd";

const HeaderLayout = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  return (
    <div className={`header ${scrollY > 62 ? "header--white" : ""}`}>
      <div className="header__navbar">
        <Button>HOME</Button>
        <Button>ABOUT US</Button>
        <Button>CONTACT</Button>
      </div>
    </div>
  );
};

export default HeaderLayout;
