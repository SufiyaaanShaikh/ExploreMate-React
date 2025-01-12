import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const images = require.context("../../images", false, /\.(png|jpe?g|svg)$/);

// SliderContainer Component
const SliderContainer = ({ destinations }) => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "90px",
    slidesToShow: 1,
    variableWidth: true,
    // autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slide-container">
      <Slider {...settings} className="container">
        {destinations.map((destination, index) => (
          <div
            className="block"
            key={index}
            role="group"
            aria-label={destination.title}
          >
            <img
              src={images(`./${destination.image}`)} 
              alt={destination.alt}
              className="h-100 w-100"
            />
            <h4 className="fw-500 f-16">{destination.title}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderContainer;