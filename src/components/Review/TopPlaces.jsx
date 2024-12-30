import React from "react";
import penIcon from "../../images/pen.svg";

const TopPlaces = ({ writeReview, setWriteReview }) => (
  <div className="title flex items-center">
    <div className="grid">
      <h2 className="fw-700 sec-head">
        {writeReview
          ? "Share your Travel Experience in form of a story"
          : "Top places with reviews"}
      </h2>
      <p className="para-f para-c para-f">
        Travelers want to see more reviews of these places.
      </p>
    </div>
    <button
      onClick={() => setWriteReview(!writeReview)}
      className="write flex justify-content items-center"
    >
      {writeReview ? "" : <img src={penIcon} alt="pen" />}

      <p className="para-c para-f">
        {writeReview ? "Cancel" : "Write a review"}
      </p>
    </button>
  </div>
);

export default TopPlaces;
