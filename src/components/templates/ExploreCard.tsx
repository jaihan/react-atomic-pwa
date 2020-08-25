import React from "react";

import "./ExploreCard.scss";

function ExploreCard() {
  return (
    <div className="t_explore">
      <h3>Explore</h3>
      <div className="container">
        <img src="/explorecard.jpg" alt="explorecard" className="img-explore" />
        <div className="bottom-left">Yesterday</div>
      </div>
    </div>
  );
}

export default ExploreCard;
