import React, { Component } from "react";
import { Menu, Icon, Popup, Button } from "semantic-ui-react";
import { getItem, removeItem } from "../atoms/storage";

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
    if (name === "explore") {
      this.setState({ activeItem: name });
    }
    if (name === "activity") {
      this.setState({ activeItem: name });
    }
  };

  handleLogout = (e: any) => {
    e.preventDefault();
    removeItem("authorization");
    removeItem("name");
    window.location.reload();
  };

  render() {
    const { activeItem }: IStates = this.state;
    const getUserName: string = getItem("name") || "";
    return (
      <div className="t_header-menu">
        <Menu borderless fluid attached="top" compact className="header-menu">
          <Menu.Item
            name="name"
            active={activeItem === "name"}
            onClick={this.handleItemClick}
          >
            <span style={{ color: "green" }}>{getUserName}</span>
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item
              name="help"
              active={activeItem === "help"}
              style={{ padding: ".01em" }}
            >
              <Icon
                circular
                link
                name="phone"
                color="green"
                className="phone-icon"
              />
            </Menu.Item>

            <Menu.Item name="logout" active={activeItem === "logout"}>
              <Popup
                wide
                trigger={
                  <Icon
                    circular
                    name="setting"
                    color="green"
                    className="setting-icon"
                  />
                }
                on="click"
                basic
              >
                <Button fluid positive circular onClick={this.handleLogout}>
                  Logout
                </Button>
              </Popup>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <div className="small-screen">
          <Menu
            fluid
            widths={2}
            borderless
            fixed="bottom"
            className="mobile-menu"
          >
            <Menu.Item
              name="explore"
              active={activeItem === "explore"}
              onClick={this.handleItemClick}
            >
              <section
                className={`${activeItem === "explore" ? "selected" : ""}`}
              >
                <Icon name="search" /> <br />
                <label>Explore</label>
              </section>
            </Menu.Item>
            <Menu.Item
              name="activity"
              active={activeItem === "activity"}
              onClick={this.handleItemClick}
            >
              <section
                className={`${activeItem === "activity" ? "selected" : ""}`}
              >
                <Icon name="bell" /> <br />
                <label>Activity</label>
              </section>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}
