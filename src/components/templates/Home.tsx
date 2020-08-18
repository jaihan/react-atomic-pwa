import React from "react";
import SimpleCard from "../molecules/card";
import SimpleItem from "../molecules/item";

import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <SimpleItem />
      <SimpleCard />
      <div className="below-simple-item">
        <SimpleItem />
      </div>
    </div>
  );
}

export default Home;
