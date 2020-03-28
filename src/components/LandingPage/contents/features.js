import React from "react";
import delivery from "../../../assets/landingPage/features/delivery.png";
import savings from "../../../assets/landingPage/features/savings.png";
import rewards from "../../../assets/landingPage/features/rewards.png";
import education from "../../../assets/landingPage/features/education.png";
import plant from "../../../assets/landingPage/Plant2.png";
import plant2 from "../../../assets/landingPage/Plant4.png";
import "../../../assets/styles/LandingPage/features.scss";

const Features = () => {
  return (
    <div>
      <div className="features">
        <img className="features__decoration" src={plant} alt="plant"></img>
        <img className="features__decoration2" src={plant2} alt="plant"></img>
        <div className="features__container">
          <div className="features__container__title">
            <p>simply awesome!</p>
          </div>
          <div className="features__container__items">
            <div className="features__container__items__detail">
              <img src={delivery} alt="delivery"></img>
              <p>
                Pick-up <br /> Service
              </p>
            </div>
            <div className="features__container__items__detail">
              <img src={savings} alt="savings"></img>
              <p>
                Easy Savings <br /> Withdrawal
              </p>
            </div>
            <div className="features__container__items__detail">
              <img src={rewards} alt="rewards"></img>
              <p>Rewards</p>
            </div>
            <div className="features__container__items__detail">
              <img src={education} alt="education"></img>
              <p>
                Waste <br /> Education
              </p>
            </div>
          </div>
          {/* <div>
            <p>You can get four benefit in just one application.</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Features;
