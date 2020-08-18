import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import firebase from "../../lib/firebase";
import { setItem } from "../atoms/storage";
import { LabelInput } from "../molecules/labelInput";

interface IProps {}

interface IStates {
  email: string;
  name: string;
  errors: any;
  token: string;
}

class SignIn extends React.Component<IProps, IStates> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      email: "",
      name: "",
      errors: {},
      token: "",
    };
  }

  signInAndContinue = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { email, name }: IStates = this.state;
    try {
      await firebase.auth().signInWithEmailAndPassword(email, "serect123");
      setItem("authorization", "secured");
      setItem("name", name);
      window.location.reload();
    } catch (err) {
      let errors: { [signin: string]: string } = {};
      errors["signin"] = err.message;
      this.setState({ errors });
    }
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value }: { name: string; value: string } = e.currentTarget;
    this.setState({ [name]: value } as Pick<any, any>);
  };

  render() {
    const { email, name, errors }: IStates = this.state;
    return (
      <Form onSubmit={this.signInAndContinue}>
        <Form.Field inline>
          <LabelInput
            labelText="Name"
            name="name"
            value={name}
            placeholder="Name"
            handleChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field inline>
          <LabelInput
            labelText="Email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={this.handleChange}
          />
        </Form.Field>
        <span style={{ color: "red" }}>{errors["signin"]}</span>
        <Segment basic textAlign="center">
          <Button type="submit" positive>
            Subscribe
          </Button>
        </Segment>
      </Form>
    );
  }
}

export default SignIn;
