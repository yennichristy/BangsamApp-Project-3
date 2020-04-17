import React from "react";
import ReactWOW from "react-wow";
import delivery from "../../../assets/landingPage/features/delivery.png";
import savings from "../../../assets/landingPage/features/savings.png";
import rewards from "../../../assets/landingPage/features/rewards.png";
import education from "../../../assets/landingPage/features/education.png";
import plant from "../../../assets/landingPage/Plant2.png";
import plant2 from "../../../assets/landingPage/Plant4.png";
import download from "../../../assets/landingPage/download2.png";
import "../../../assets/styles/LandingPage/features.scss";

const features = [
  {
    img: delivery,
    title: "Pick-up Service"
  },
  {
    img: savings,
    title: "Easy Withdrawal"
  },
  {
    img: rewards,
    title: "Rewards"
  },
  {
    img: education,
    title: "Waste Education"
  }
];

const Features = () => {
  return (
    <div>
      <div className="features">
        <img className="features__decoration" src={plant} alt="plant"></img>
        <img className="features__decoration2" src={plant2} alt="plant"></img>
        <div className="features__container">
          <div className="features__container--title">
            <ReactWOW animation="animateUp">
              <p>simply awesome!</p>
            </ReactWOW>
          </div>
          <div className="features__container__items">
            {features.map((feature, index) => (
              <ReactWOW animation="animateUp" delay={"0.2s"} key={index}>
                <div className="features__container__items__detail">
                  <img src={feature.img} alt="delivery"></img>
                  <p>{feature.title}</p>
                </div>
              </ReactWOW>
            ))}
          </div>
          <div className="features__container__download">
            <div className="features__container__download--title">
              <ReactWOW animation="animateUp" delay={"0.3s"}>
                <h2>Download our Apps</h2>
              </ReactWOW>
              <ReactWOW animation="animateUp" delay={"0.4s"}>
                <p>You can only access our platform through Android</p>
              </ReactWOW>
            </div>
            <div className="features__container__download__android">
              <ReactWOW animation="animateUp" delay={"0.4s"}>
                <img src={download} alt="Google Play"></img>
              </ReactWOW>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
