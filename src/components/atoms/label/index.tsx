import React from "react";

type IProps = {
  text: string;
};

export const Label: React.FC<IProps> = (props) => (
  <span className="a__label">{props.text}</span>
);
