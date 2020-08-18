import React from "react";
import { Container, Image } from "semantic-ui-react";
import SignIn from "../components/templates/SignIn";
import { Paragraph } from "../components/atoms/paragraph";

import "./SignInPage.scss";

function SignInPage() {
  return (
    <div className="signin-page">
      <Container className="content">
        <Image src="/impactterra.png" size="small" className="img-header" />
        <Paragraph
          text={
            "Impact Terra provides its services through the Golden Paddy DigitalPlatform. Farmers connect to the platform via an Android application, while Impact Terra's team and service providers connect via web-portals."
          }
        />
        <SignIn />
      </Container>
    </div>
  );
}

export default SignInPage;
