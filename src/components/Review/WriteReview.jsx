import React from "react";
import reviewDummy from "../../images/review-dummy-photo.webp";

function WriteReview() {
  return (
    <>
      {/* <!-- Main start  --> */}
      {/* <section id="review" class="position">
        <div class="sec"> */}
          {/* <div class="title flex items-center">
                <div class=" grid">
                    <h2 class="fw-700 sec-head">Write Your Review</h2>
                    <p class="para-f para-c para-f">Share your experience with Like-Minded Explorers.</p>
                </div>
                <a href="#" class="write flex justify-content items-center">
                    <img src="images/pen.svg" alt="pen">
                    <p class="para-c para-f">Write a review</p>
                </a>
            </div> */}

          <div class="write-review grid">
            <div class="left">
              <div class="review-photo">
                <img
                  src={reviewDummy}
                  class="w-100 h-100"
                  alt="review Dummy Photo"
                />
              </div>
            </div>
            <div class="right">
              <form class="grid">
                <div class="review-input-block flex">
                  <label for="review-title" class="f-16 fw-500">
                    Title of your review
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="review-title"
                    placeholder="Summarize your Travel Journey"
                  />
                </div>
                <div class="review-input-block flex">
                  <label for="review-box" class="f-16 fw-500">
                    Your review
                  </label>
                  <textarea
                    type="text"
                    name="review-box"
                    id="review-box"
                    placeholder="A detailed review of your Travel Journey."
                  ></textarea>
                </div>
                <div class="review-input-block flex">
                  <label for="review-location" class="f-16 fw-500">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="review-location"
                    placeholder="Enter Travel Location"
                  />
                </div>
                <div class="review-input-block flex">
                  <label for="review-date" class="f-16 fw-500">
                    When did you travel?
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="review-date"
                    placeholder="Select One"
                  />
                </div>
                <button type="submit">Submit Review</button>
              </form>
            </div>
          </div>
        {/* </div>
      </section> */}
      {/* <!-- Main end  --> */}
    </>
  );
}

export default WriteReview;
