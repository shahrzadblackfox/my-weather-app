import React from "react";
import CoolDate from "./CoolDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTempUnit from "./WeatherTempUnit";

import "./Weather.css";
export default function Weather(props) {
  return (
    <div className="container city-info">
      <div className="row ">
        <div className="col-4 city-temp">
          <WeatherTempUnit celsius={props.data.temperature} />
        </div>
        <div className="col-4 ">
          <h4 className="city-name">{props.data.city}</h4>
          <h4 className="time-format">
            <CoolDate date={props.data.date} />
          </h4>
        </div>
        <div className="col-4">
          <div className="weather-icon">
            <WeatherIcon code={props.data.icon} size={64} />
          </div>
        </div>
      </div>
      <div className="row dis-weather">
        <div className="col-4">Description:{props.data.description}</div>
        <div className="col-4">Humidity:{props.data.humidity}%</div>
        <div className="col-4">Wind: {props.data.wind} km/h</div>
      </div>
      <div className="row forecast-info">
        <h2>Next 5 day:</h2>
      </div>
    </div>
  );
}
