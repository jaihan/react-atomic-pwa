import React from "react";
import { Card } from "semantic-ui-react";
import { Img } from "../../atoms/image";

const imageUrl = process.env.REACT_APP_IMAGE_URL || "";
function SimpleCard() {
  return (
    <Card.Group itemsPerRow={4} doubling centered>
      <Card>
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Description>
            Matthew is a data analsyt living in Yangon.
          </Card.Description>
        </Card.Content>
        <Img src={imageUrl} alt="data" />
      </Card>

      <Card>
        <Card.Content>
          <Card.Header>Steven</Card.Header>
          <Card.Description>
            Steven is a software engineer living in Yangon.
          </Card.Description>
        </Card.Content>
        <Img src={imageUrl} alt="software" />
      </Card>
    </Card.Group>
  );
}

export default SimpleCard;
