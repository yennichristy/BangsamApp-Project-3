import React from "react";
import "../../../assets/styles/LandingPage/wasteFacts.scss";
import funfact1 from "../../../assets/landingPage/fun1.svg";
import funfact2 from "../../../assets/landingPage/fun2.svg";
import funfact3 from "../../../assets/landingPage/fun3.svg";

const WasteFacts = () => {
  return (
    <div>
      <div className="waste-facts">
        <div className="waste-facts__title">
          <h1>Waste Fun Facts</h1>
        </div>
        <div className="waste-facts__cards-container">
          <div className="waste-facts__cards-container__series Tilt-inner">
            <div className="waste-facts__cards-container__series__head">
              <p>Waste Fun Fact #1</p>
              <img
                className="waste-facts__cards-container__series__head__image"
                src={funfact1}
                alt="Fun fact #1"
              ></img>
            </div>
            <div className="waste-facts__cards-container__series__content">
              <p>
                In Sweden, there are 6,17 million tons of waste used for heating
                equipment in 1.2 million apartments and electricity needs of 680
                thousand apartments.
              </p>
            </div>
          </div>
          <div className="waste-facts__cards-container__series">
            <div className="waste-facts__cards-container__series__head">
              <p>Waste Fun Fact #2</p>
              <img
                className="waste-facts__cards-container__series__head__image"
                src={funfact2}
                alt="Fun fact #1"
              ></img>
            </div>
            <div className="waste-facts__cards-container__series__content">
              <p>
                It is estimated that at least 50% of the ‘rubbish’ in our
                rubbish bins could be reused or recycled instead of being thrown
                away.
              </p>
            </div>
          </div>
          <div className="waste-facts__cards-container__series">
            <div className="waste-facts__cards-container__series__head">
              <p>Waste Fun Fact #3</p>
              <img
                className="waste-facts__cards-container__series__head__image"
                src={funfact3}
                alt="Fun fact #1"
              ></img>
            </div>
            <div className="waste-facts__cards-container__series__content">
              <p>
                There are estimated between 1.15 - 2.41 million tons of plastic
                enters the oceans every year from rivers. And four of
                Indonesia's rivers rank among the 20 most polluted in the world
                in terms of mismanaged plastic waste measured in metric tons.
                Indonesia emit around 200 thousand tons of plastic from rivers
                and streams, mainly from Java and Sumatra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteFacts;
