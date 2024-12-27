import React from "react";
import SliderContainer from "./SliderContainer";
import SearchIcon from "../../images/search-black.svg"; // Fixed import

// Data for destinations
const destinations = [
  { image: "manali.jpg", alt: "1", title: "Manali, Himachal" },
  { image: "laddak.jpg", alt: "2", title: "Ladakh, Kashmir" },
  { image: "ooty.jpg", alt: "3", title: "Ooty, Tamil Nadu" },
  { image: "darjeeling.jpg", alt: "4", title: "Darjeeling, West Bengal" },
  { image: "Andaman Nicobar.jpg", alt: "5", title: "Andaman Nicobar" },
  { image: "udaipur.jpg", alt: "6", title: "Udaipur, Rajasthan" },
  { image: "Coorg.jpg", alt: "7", title: "Coorg" },
  { image: "varanasi.jpg", alt: "8", title: "Varanasi, Uttar Pradesh" },
];

// Main Banner Component
function Banner() {
  return (
    <section id="main" className="vh-100 position">
      <div className="sec flex vh-100">
        <h1 className="fw-700 heading">Journey with Like-Minded Explorers.</h1>
        <div className="main-search flex items-center">
          <img src={SearchIcon} alt="search" className="invert" />
          <input
            id="searchInput"
            type="text"
            placeholder="Search Destinations"
            className="w-100"
            autoComplete="off"
          />
        </div>
        <div className="main-vac">
          <h3 className="fw-700">Top Vacation Destinations</h3>
          <SliderContainer destinations={destinations} />
        </div>
      </div>
    </section>
  );
}

export default Banner;
