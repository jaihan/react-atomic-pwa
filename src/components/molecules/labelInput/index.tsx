import React from "react";
import { Input } from "../../atoms/input";
import { Label } from "../../atoms/label";

type IProps = {
  labelText: string;
  name: string;
  value: string;
  type?: string;
  placeholder: string;
  handleChange: any;
};

export const LabelInput: React.FC<IProps> = (props): JSX.Element => {
  return (
    <>
      <Label text={props.labelText} />
      <Input
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        handleChange={props.handleChange}
      />
    </>
  );
};
