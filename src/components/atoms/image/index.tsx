import React from "react";

type IProps = {
  src: string;
  alt: string;
};

export const Img: React.FC<IProps> = (props) => {
  return <img className="a__image" src={props.src} alt={props.alt} />;
};
