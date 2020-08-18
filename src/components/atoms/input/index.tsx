import React from "react";

import "./_style.scss";

type IProps = {
  name: string;
  value: string;
  type?: string;
  placeholder: string;
  handleChange: any;
};

export const Input: React.FC<IProps> = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      name={props.name}
      value={props.value}
      onChange={props.handleChange}
      className="a__input"
      required
    />
  );
};
