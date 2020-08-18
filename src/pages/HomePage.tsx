import React from "react";
import { Container } from "semantic-ui-react";
import Home from "../components/templates/Home";
import HearderMenu from "../components/templates/HeaderMenu";

function HomePage() {
  return (
    <>
      <HearderMenu />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default HomePage;
