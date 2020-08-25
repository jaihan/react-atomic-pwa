import React from "react";
import SimpleCard from "../molecules/card";
import WeatherCard from "./WeatherCard";
import ExploreCard from "./ExploreCard";

import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <WeatherCard />
      <ExploreCard />
      <section className="agriculture">
        <h4>Implication on Agriculture</h4>
        <p className="paragraph">
          The pandemic hit us hard and there's no exception for agriculture
        </p>
      </section>
      <SimpleCard />
    </div>
  );
}

export default Home;
