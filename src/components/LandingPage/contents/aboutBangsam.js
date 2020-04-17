import React from "react";
import ReactWOW from "react-wow";
import dallah from "../../../assets/landingPage/teamBangsam/Dallah.png";
import ricky from "../../../assets/landingPage/teamBangsam/Ricky.png";
import jason from "../../../assets/landingPage/teamBangsam/Jason.png";
import yenni from "../../../assets/landingPage/teamBangsam/Yenni.png";
import "../../../assets/styles/LandingPage/aboutBangsam.scss";

const team = [
  {
    img: dallah,
    name: "Afdallah W. A.",
    role: "Back-end Developer"
  },
  {
    img: ricky,
    name: "Ricky",
    role: "Back-end Developer"
  },
  {
    img: yenni,
    name: "Yenni K. P",
    role: "Front-end Developer"
  },
  {
    img: jason,
    name: "Jason A.L",
    role: "Mobile Developer"
  }
];

const AboutBangsam = () => {
  return (
    <div className="about-bangsam">
      <div className="about-bangsam__container">
        <div className="about-bangsam__container__title">
          <ReactWOW animation="animateUp">
            <h1>About Bangsam</h1>
          </ReactWOW>
        </div>
        <div className="about-bangsam__container__description">
          <ReactWOW animation="animateUp" delay={"0.2s"}>
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
          </ReactWOW>
          <ReactWOW animation="animateUp" delay={"0.3s"}>
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
          </ReactWOW>
        </div>
      </div>
      <div className="about-bangsam__team-container">
        <ReactWOW animation="animateUp" delay={"0.4s"}>
          <h1 className="about-bangsam__team-container__title">Our Team</h1>
        </ReactWOW>
        <div className="about-bangsam__team-container__cards-container">
          {team.map((member, index) => (
            <ReactWOW animation="animateUp" delay={"0.5s"} key={index}>
              <div className="about-bangsam__team-container__cards-container__card">
                <div className="about-bangsam__team-container__cards-container__card__photo">
                  <img src={member.img} alt="back-end"></img>
                </div>
                <div className="about-bangsam__team-container__cards-container__card__text">
                  <h5>{member.name}</h5>
                  <p>{member.role}</p>
                </div>
              </div>
            </ReactWOW>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutBangsam;
