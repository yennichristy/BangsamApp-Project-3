import React from "react";
import ReactWOW from "react-wow";
import pageOne from "../../../assets/landingPage/homepage.svg";
import top1 from "../../../assets/landingPage/top1.png";
import top2 from "../../../assets/landingPage/top2.png";
import bot3 from "../../../assets/landingPage/bottom3.png";
import bot2 from "../../../assets/landingPage/bottom2.png";
import "../../../assets/styles/LandingPage/homePage.scss";

const HomePage = () => {
  return (
    <div>
      <div className="home-page">
        <div>
          <img className="home-page__decoration1" src={top1} alt="pics"></img>
        </div>
        <div>
          <img className="home-page__decoration3" src={bot3} alt="pics"></img>
        </div>
        <div>
          <img className="home-page__decoration2" src={top2} alt="pics"></img>
        </div>
        <div>
          <img className="home-page__decoration4" src={bot2} alt="pics"></img>
        </div>
        <div className="home-page__left">
          <ReactWOW animation="animateUp">
            <div className="home-page__left__headline">
              <p>Be a part of the SOLUTION not part of the POLLUTION</p>
            </div>
          </ReactWOW>
          <ReactWOW animation="animateUp" delay={"0.1s"}>
            <div className="home-page__left__button">
              <button>Learn more</button>
            </div>
          </ReactWOW>
        </div>
        <div className="home-page__right">
          <ReactWOW animation="animateUp">
            <img
              className="home-page__right__picture"
              src={pageOne}
              alt="Bangsam"
            ></img>
          </ReactWOW>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
