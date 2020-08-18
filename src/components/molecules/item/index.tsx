import React from "react";
import { Message } from "semantic-ui-react";

import "./_style.scss";

function SimpleItem() {
  return (
    <Message
      icon="exclamation circle"
      header="News"
      content="Get the best news in your e-mail every day."
      className="message-item"
    />
  );
}

export default SimpleItem;
