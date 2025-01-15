import React, { useState } from "react";
import FeedCards from "./FeedCards";
import searchBlackIcon from "../../images/search-black.svg";
import usersData from "../../Data/usersData";
import { motion } from "framer-motion";

function FeedContainer() {
  const [destinationSearch, setDestinationSearch] = useState([]); // State to store search results
  const [searchQuery, setSearchQuery] = useState(""); // Track search query

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase().trim();
    setSearchQuery(searchValue); // Update search query state
    const filteredDestinations = usersData.filter((destination) => {
      return destination.address.city.toLowerCase().includes(searchValue);
    });
    setDestinationSearch(filteredDestinations); // Update state with filtered destinations
  };

  return (
    <>
      <motion.section
        id="main-feed"
        className="main-feed position"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }} // Animation duration for page load
      >
        <div className="feed-sec sec pad flex">
          <div className="title">
            <div className="feedSearchBox flex items-center justify-content text-center">
              <img src={searchBlackIcon} alt="search" />
              <input
                onChange={handleSearch} // Call handleSearch on input change
                className="para-f"
                type="text"
                id="feedSearch"
                placeholder="Destination"
                autoComplete="off"
              />
            </div>
            <h2 className="text-center fw-500 feedHeading">Travel Feed</h2>
          </div>
          <motion.div
            id="feedContainer"
            className="container flex flex-wrap justify-center	"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} // Animation for fade-in of container
            key={destinationSearch.length} // Change key to force animation when search changes
          >
            {destinationSearch.length === 0 && searchQuery ? (
              <p className="notFound f-16 text-center fw-500 mx-auto">
                No Users Found in this City
              </p> // Display message if no search results
            ) : (
              <FeedCards filteredDestinations={destinationSearch} /> // Pass filteredDestinations
            )}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default FeedContainer;
