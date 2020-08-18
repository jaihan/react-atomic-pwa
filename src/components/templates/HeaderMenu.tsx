import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { getItem, removeItem } from "../atoms/storage";
import { Img } from "../atoms/image";

import "./HeaderMenu.scss";

interface IProps {}
interface IStates {
  activeItem: any;
}

export default class HeaderMenu extends Component<IProps, IStates> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      activeItem: "",
    };
  }

  handleItemClick = (e: any, { name }: any) => {
    this.setState({ activeItem: name });
    if (name === "logout") {
      removeItem("authorization");
      removeItem("name");
      window.location.reload();
    }
  };

  render() {
    const { activeItem }: IStates = this.state;
    const getUserName: string = getItem("name") || "";
    return (
      <div>
        <Menu borderless fluid attached="top" className="header-menu">
          <Menu.Item>
            <Img src="/impactterra.png" alt="logo" />
          </Menu.Item>

          <Menu.Item
            name="name"
            active={activeItem === "name"}
            onClick={this.handleItemClick}
          >
            {getUserName}
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item
              name="help"
              active={activeItem === "help"}
              onClick={this.handleItemClick}
            >
              Help
            </Menu.Item>

            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            >
              Log out
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <div className="small-screen">
          <Menu fluid widths={3} fixed="bottom" className="mobile-menu">
            <Menu.Item
              name="buy"
              active={activeItem === "buy"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="sell"
              active={activeItem === "sell"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="rent"
              active={activeItem === "rent"}
              onClick={this.handleItemClick}
            />
          </Menu>
        </div>
      </div>
    );
  }
}
