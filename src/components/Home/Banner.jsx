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
    <section id="main" className="vh-100 bg-white position">
      <div className="sec main-container  vh-100">
        <div className="left flex pt-32">
          <h1 className="text-zinc-800 text-5xl/[55px] font-semibold ">Journey with Like-Minded Explorers.</h1>
          <p className="text-gray-500 text-sm w-3/4 mt-6"> Discover unique destinations, connect with fellow travelers, and create unforgettable memories with ExploreMates.</p>
          <div className="main-search flex items-center">
          <img src={SearchIcon} alt="search" className="" />
          <input
            id="searchInput"
            type="text"
            placeholder="Search Destinations"
            className="w-100 text-zinc-800 placeholder:text-zinc-800"
            autoComplete="off"
          />
        </div>
        </div>
        <div className="right"></div>
      </div>
    </section>
  );
}

export default Banner;