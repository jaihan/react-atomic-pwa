import React from "react";
import { Image, Menu } from "semantic-ui-react";

import "./WeatherCard.scss";

function WeatherCard() {
  return (
    <Menu widths={3} borderless className="t_weather-card">
      <Menu.Item>
        <Image src="/weather.png" size="tiny" />
      </Menu.Item>
      <Menu.Item>
        <section className="cloud">
          <span className="lbl">Mostyly cloud</span>
          <br />
          <br />
          <span className="celsius">22'C</span>
        </section>
      </Menu.Item>
      <Menu.Item>
        <section className="rain">
          <label className="lbl">30% Rain pre</label>
          <br /> <br />
          <select name="weather" id="weather" className="select">
            <option value="Dala">Dala</option>
            <option value="Ayawady">Ayawady</option>
            <option value="Kalaw">Kalaw</option>
          </select>
        </section>
      </Menu.Item>
    </Menu>
  );
}

export default WeatherCard;
