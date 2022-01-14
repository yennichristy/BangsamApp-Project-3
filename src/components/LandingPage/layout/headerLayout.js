import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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

  const history = useHistory();

  const about = () => {
    history.push("/about-us");
  };

  const home = () => {
    history.push("/");
  };

  return (
    <div className={`header ${scrollY > 62 ? "header--white" : ""}`}>
      <div className="header__navbar">
        <Button className="header__navbar__btn" onClick={home}>
          HOME
        </Button>
        <Button className="header__navbar__btn" onClick={about}>
          ABOUT US
        </Button>
        <Button className="header__navbar__btn">CONTACT</Button>
        <Button
          className="header__navbar__btn"
          onClick={() => history.push("/signin")}
        >
          LOGIN
        </Button>
      </div>
    </div>
  );
};

export default HeaderLayout;
