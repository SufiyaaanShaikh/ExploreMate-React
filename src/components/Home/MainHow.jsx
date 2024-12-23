import React from "react";
import searchIcon from "../../images/search-black.svg";
import partnerIcon from "../../images/partner.svg";
import smileIcon from "../../images/smile.svg";
import groupIcon from "../../images/group.svg";
import airplaneIcon from "../../images/airplane.svg";
import starIcon from "../../images/star.svg";
import SectionHeading from "./SectionHeading";

function HowMain() {
  const cardData = [
    {
      id: 1,
      imgSrc: searchIcon,
      altText: "search",
      title: "Search Destination",
      description: "Search and select a destination that you are traveling to.",
    },
    {
      id: 2,
      imgSrc: partnerIcon,
      altText: "partner",
      title: "Find Travel Partners",
      description:
        "Browse through the list of trips, locals, and nearby users in that location.",
    },
    {
      id: 3,
      imgSrc: smileIcon,
      altText: "smile",
      title: "Get Connected",
      description:
        "Chat with your travel partners to coordinate trip details and stay organized.",
    },
    {
      id: 4,
      imgSrc: groupIcon,
      altText: "group",
      title: "Trip Together",
      description:
        "Plan together, meet up with your travel companion at a pre-decided public place and travel together.",
    },
    {
      id: 5,
      imgSrc: airplaneIcon,
      altText: "airplane",
      title: "Enjoy the Journey",
      description:
        "Embark on your adventure with trusted travel buddies and make unforgettable memories.",
    },
    {
      id: 6,
      imgSrc: starIcon,
      altText: "star",
      title: "Share Reviews",
      description:
        "Rate your travel partners and share feedback to help future travelers.",
    },
  ];

  return (
    <>
      <section id="main-how" className="vh-70 position">
        <div className="sec flex justify-content items-center text-center vh-70 pad">
          <SectionHeading
            secHead="How it works?"
            secSubHead="From Start to Finish"
          />
          <div className="container flex justify-content items-center grid-4">
            <Cards cardData={cardData} />
          </div>
        </div>
      </section>
    </>
  );
}
export default HowMain;

function Cards({ cardData }) {
  return (
    <>
      {cardData.map((card) => (
        <div className="card w-100" key={card.id}>
          <img src={card.imgSrc} alt={card.altText} />
          <h3 className="fw-500">{card.title}</h3>
          <p className="para-c para-f">{card.description}</p>
        </div>
      ))}
    </>
  );
}
