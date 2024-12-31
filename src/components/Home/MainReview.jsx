import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";

const images = require.context("../../images", false, /\.(png|jpe?g|svg)$/);

const reviewData = [
  {
    id: 1,
    imgName: "laddak.jpg",
    altText: "laddak",
    title: "Ladakh",
    location: "Ladakh, Kashmir",
    rating: 7.5,
    description:
      "Mumbai, often known as the City of Dreams, offers a rich and diverse experience that captivated me during a recent city tour. The journey began at the iconic Gateway of India, a majestic colonial-era monument that stands proudly overlooking the Arabian Sea.",
    link: "/single-review",
  },
  {
    id: 2,
    imgName: "nainital.jpg",
    altText: "nainital",
    title: "Nainital",
    location: "Nainital, Uttarakhand",
    rating: 7.5,
    description:
      "Mumbai, often known as the City of Dreams, offers a rich and diverse experience that captivated me during a recent city tour. The journey began at the iconic Gateway of India, a majestic colonial-era monument that stands proudly overlooking the Arabian Sea.",
    link: "/single-review",
  },
  {
    id: 3,
    imgName: "ooty.jpg",
    altText: "ooty",
    title: "Ooty",
    location: "Ooty, Tamil Nadu",
    rating: 7.5,
    description:
      "Mumbai, often known as the City of Dreams, offers a rich and diverse experience that captivated me during a recent city tour. The journey began at the iconic Gateway of India, a majestic colonial-era monument that stands proudly overlooking the Arabian Sea.",
    link: "/single-review",
  },
  {
    id: 4,
    imgName: "varanasi.jpg",
    altText: "varanasi",
    title: "Varanasi",
    location: "Varanasi, Uttar Pradesh",
    rating: 7.5,
    description:
      "Mumbai, often known as the City of Dreams, offers a rich and diverse experience that captivated me during a recent city tour. The journey began at the iconic Gateway of India, a majestic colonial-era monument that stands proudly overlooking the Arabian Sea.",
    link: "/single-review",
  },
];

function MainReview() {
  return (
    <section id="main-review" className="vh-70 position">
      <div className="sec vh-70 flex justify-content items-center pad">
        <SectionHeading
          secHead="Top places with reviews"
          secSubHead="Travelers reviews"
        />
        <Cards reviewData={reviewData} />

        <div className="view-all text-center flex">
          <Link to="/review" className="btn fw-500 para-f">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MainReview;

const Cards = ({ reviewData }) => {
  return (
    <>
      <div className="container grid grid-4">
        {reviewData.map((review) => (
          <div className="card grid" key={review.id}>
            <Link to={review.link}>
              <div className="img-block h-100">
                <img
                  src={images(`./${review.imgName}`)}
                  alt={review.altText}
                  className="h-100 w-100"
                />
              </div>
            </Link>
            <div className="content">
              <div className="content-title flex">
                <h5>{review.title}</h5>
                <div className="rating flex items-center">
                  <p>{review.rating}</p>
                  <img src={images("./check-star.svg")} alt="star" />
                </div>
              </div>
              <p className="para-c para-f">{review.location}</p>
              <div className="para">{review.description}</div>
              <span>
                <Link to={review.link} className="read para-c">
                  read more...
                </Link>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
