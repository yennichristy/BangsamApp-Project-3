import React from "react";
import dallah from "../../../assets/landingPage/teamBangsam/Dallah.png";
import ricky from "../../../assets/landingPage/teamBangsam/Ricky.png";
import jason from "../../../assets/landingPage/teamBangsam/Jason.png";
import yenni from "../../../assets/landingPage/teamBangsam/Yenni.png";
import "../../../assets/styles/LandingPage/aboutBangsam.scss";

const AboutBangsam = () => {
  return (
    <div>
      <div className="about-bangsam">
        <div className="about-bangsam__container">
          <div className="about-bangsam__container__title">
            <h1>About Bangsam</h1>
          </div>
          <div className="about-bangsam__container__description">
            <p>
              Waste cannot be separated from the activity of human being. Almost
              everything that human do ends with producing waste. According to
              the research by Kata Data, there are at least 175.000 tons of
              waste produce throughout Indonesia and mostly ended at the dump
              without being able to be processed and utilized further. We hope
              that waste can be manage for the good of the earth and for the
              next generation to come with the participation of the users from
              this application. The waste will be separated according to its
              kind from the beginning so that it can be processed or utilized
              further.
            </p>
            <p>
              This application is a project continuation from Binar Academy to
              Glints Academy batch 5. The purpose of this appilcation is to
              solve waste issues and to improve the management of waste
              specifically household waste. With the help of technology we
              appeal users to collect and separated waste according to its kind
              to build a better environment. We believe that this application
              could help users to participate to create more efficient and
              productive way to manage waste in the neighborhood as well as
              enhancing their income.
            </p>
          </div>
        </div>
        <div className="about-bangsam__team-container">
          <h1 className="about-bangsam__team-container__title">Our Team</h1>
          <div className="about-bangsam__team-container__cards-container">
            <div className="about-bangsam__team-container__cards-container__card">
              <div className="about-bangsam__team-container__cards-container__card__photo">
                <img src={dallah} alt="back-end"></img>
              </div>
              <div className="about-bangsam__team-container__cards-container__card__text">
                <h5>Afdallah W. A.</h5>
                <p>Back-end Developer</p>
              </div>
            </div>
            <div className="about-bangsam__team-container__cards-container__card">
              <div className="about-bangsam__team-container__cards-container__card__photo">
                <img src={ricky} alt="back-end"></img>
              </div>
              <div className="about-bangsam__team-container__cards-container__card__text">
                <h5>Ricky</h5>
                <p>Back-end Developer</p>
              </div>
            </div>
            <div className="about-bangsam__team-container__cards-container__card">
              <div className="about-bangsam__team-container__cards-container__card__photo">
                <img src={yenni} alt="front-end"></img>
              </div>
              <div className="about-bangsam__team-container__cards-container__card__text">
                <h5>Yenni K. P.</h5>
                <p>Front-end Developer</p>
              </div>
            </div>
            <div className="about-bangsam__team-container__cards-container__card">
              <div className="about-bangsam__team-container__cards-container__card__photo">
                <img src={jason} alt="mobile"></img>
              </div>
              <div className="about-bangsam__team-container__cards-container__card__text">
                <h5>Jason A. L</h5>
                <p>Mobile Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBangsam;
