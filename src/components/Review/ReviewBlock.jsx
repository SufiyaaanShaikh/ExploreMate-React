import React from "react";
import { Link } from "react-router-dom";

const ReviewBlock = ({ image, location, title, description }) => (
  <div className="review-block grid">
    <Link to="/single-review" className="img-block h-100">
      <img src={image} alt={location} className="w-100 h-100" />
    </Link>
    <div className="content grid">
      <p className="para-c para-f">{location}</p>
      <h2 className="sec-title fw-500">{title}</h2>
      <p className="para-c para-f">{description}</p>
      <div className="radio-wrapper-17">
        {[5, 4, 3, 2, 1].map((rating) => (
          <React.Fragment key={rating}>
            <input id={`rating-17-${rating}`} type="radio" name="radio-examples" />
            <label className={`rating-${rating}`} htmlFor={`rating-17-${rating}`}></label>
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

export default ReviewBlock;
