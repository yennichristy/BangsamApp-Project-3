import React from "react";
import plant from "../../../assets/landingPage/Plant5.png";
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
              The purpose of this appilcation is to solve waste issues and to
              improve the management of waste specifically household waste. With
              the help of technology we appeal users to collect and separated
              waste according to its kind to build a better environment. We
              believe that this application could help users to participate to
              create more efficient and productive way to manage waste in the
              neighborhood as well as enhancing their income.
            </p>
          </div>
          <div className="about-bangsam__container__title">
            <h1>Our Team</h1>
          </div>
          <img
            className="about-bangsam__decoration"
            src={plant}
            alt="plant"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default AboutBangsam;
