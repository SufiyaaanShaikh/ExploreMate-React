import React from "react";
import FeedCards from "./FeedCards";
import searchBlackIcon from "../../images/search-black.svg";


function FeedContainer() {
  return (
    <>
      <section id="main-feed" class="main-feed position">
        <div class="feed-sec sec  pad flex ">
          <div class="title">
            <div class="feedSearchBox flex items-center justify-content text-center">
              <img src={searchBlackIcon} alt="search" />
              <input className="para-f" type="text" id="feedSearch" placeholder="Destination" />
            </div>
            <h2 class="text-center fw-500 feedHeading">Travel Feed</h2>
          </div>
          <div id="feedContainer" class="container grid grid-4">
            <FeedCards/>
          </div>
          {/* <!-- <div class="view-all text-center ">
                <a href="feed.html" class="btn fw-500 para-f">View All</a>
            </div> --> */}
        </div>
      </section>
    </>
  );
}

export default FeedContainer;