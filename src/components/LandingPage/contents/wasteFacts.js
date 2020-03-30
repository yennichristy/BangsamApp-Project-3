import React from "react";
import ReactWOW from "react-wow";
import "../../../assets/styles/LandingPage/wasteFacts.scss";
import funfact1 from "../../../assets/landingPage/fun1.svg";
import funfact2 from "../../../assets/landingPage/fun2.svg";
import funfact3 from "../../../assets/landingPage/fun3.svg";

const cards = [
  {
    title: "Waste Fun Fact #1",
    img: funfact1,
    content:
      "In Sweden, there are 6,17 million tons of waste used for heating equipment in 1.2 million apartments and electricity needs of 680 thousand apartments."
  },
  {
    title: "Waste Fun Fact #2",
    img: funfact2,
    content:
      "It is estimated that at least 50% of the ‘rubbish’ in our   rubbish bins could be reused or recycled instead of being thrown   away."
  },
  {
    title: "Waste Fun Fact #3",
    img: funfact3,
    content:
      "There are estimated between 1.15 - 2.41 million tons of plastic enters the oceans every year from rivers. And four of   Indonesia's rivers rank among the 20 most polluted in the world in terms of mismanaged plastic waste measured in metric tons. Indonesia emit around 200 thousand tons of plastic from rivers and streams, mainly from Java and Sumatra."
  }
];

const WasteFacts = () => {
  return (
    <div className="waste-facts">
      <div className="waste-facts__title">
        <ReactWOW animation="animateUp">
          <h1>Waste Fun Facts</h1>
        </ReactWOW>
      </div>
      <div className="waste-facts__cards-container">
        {cards.map((card, index) => (
          <ReactWOW animation="animateUp" delay={"0.1s"} key={index}>
            <div className="waste-facts__cards-container__series">
              <div className="waste-facts__cards-container__series__head">
                <p>{card.title}</p>
                <img
                  className="waste-facts__cards-container__series__head__image"
                  src={card.img}
                  alt="Fun fact"
                ></img>
              </div>
              <div className="waste-facts__cards-container__series__content">
                <p>{card.content}</p>
              </div>
            </div>
          </ReactWOW>
        ))}
      </div>
    </div>
  );
};

export default WasteFacts;
