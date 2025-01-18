import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FeedCards from "./FeedCards";
import usersData from "../../Data/usersData";
import { motion } from "framer-motion";
import SearchInputBox from "./SearchInputBox";

function FeedContainer() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get("query") || ""; // Get query from URL

  const [destinationSearch, setDestinationSearch] = useState([]);
  const [searchQuery, setSearchQuery] = useState(initialQuery); // Initialize with URL query

  // Handle search logic
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase().trim();
    setSearchQuery(searchValue);

    const filteredDestinations = usersData.filter((user) =>
      user.address.city.toLowerCase().includes(searchValue)
    );
    setDestinationSearch(filteredDestinations);
  };

  // Initialize search results when the component mounts or query changes
  useEffect(() => {
    const filteredDestinations = usersData.filter((user) =>
      user.address.city.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
    setDestinationSearch(filteredDestinations);
  }, [searchQuery]); // Re-run when searchQuery changes

  return (
    <motion.section
      id="main-feed"
      className="main-feed position"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="feed-sec sec pad flex">
        <div className="title">
          <h2 className="text-center fw-500 feedHeading mb-4">Travel Feed</h2>
          <SearchInputBox
            handleSearch={handleSearch}
            searchQuery={searchQuery}
            onSubmit={(e) => e.preventDefault()} // No redirection in FeedContainer
          />
        </div>
        <motion.div
          id="feedContainer"
          className="container flex flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          key={destinationSearch.length} // Re-trigger animation on data change
        >
          {destinationSearch.length === 0 && searchQuery ? (
            <p className="notFound f-16 text-center fw-500 mx-auto">
              No Users Found in this City
            </p>
          ) : (
            <FeedCards filteredDestinations={destinationSearch} />
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default FeedContainer;
