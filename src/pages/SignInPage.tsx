import React from "react";
import { Container, Image } from "semantic-ui-react";
import SignIn from "../components/templates/SignIn";
import { Paragraph } from "../components/atoms/paragraph";

import "./SignInPage.scss";

function SignInPage() {
  return (
    <div className="signin-page">
      <Container className="content">
        <Image src="/logo.png" size="small" className="img-header" />
        <Paragraph text={""} />
        <SignIn />
      </Container>
    </div>
  );
}

export default SignInPage;
