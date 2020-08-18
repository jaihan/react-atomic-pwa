import React from "react";
import { getItem } from "../atoms/storage";

interface WithRootProps {}

interface WWithRootState {
  loading: boolean;
  redirect: boolean;
}

export default function WithAuthenticate(
  ComponentNotToProtect: any,
  ComponentToProtect: any
) {
  return class extends React.Component<WithRootProps, WWithRootState> {
    constructor(props: WithRootProps) {
      super(props);
      this.state = {
        loading: true,
        redirect: false,
      };
    }

    componentDidMount() {
      this.setState({ loading: false });
      if (getItem("authorization") !== "secured") {
        this.setState({ loading: false, redirect: true });
      }
    }

    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      return (
        <React.Fragment>
          {redirect ? (
            <ComponentNotToProtect {...this.props} />
          ) : (
            <ComponentToProtect {...this.props} />
          )}
        </React.Fragment>
      );
    }
  };
}
