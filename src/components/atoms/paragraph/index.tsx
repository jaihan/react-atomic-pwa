import React from "react";

import "./_style.scss";

type IProps = {
  text: string;
};

export const Paragraph: React.FC<IProps> = (props) => (
  <div className="a__paragraph">{props.text}</div>
);
