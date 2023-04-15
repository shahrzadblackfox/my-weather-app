import React from "react";
import CoolDate from "./CoolDate";

import "./Weather.css";
export default function Weather(props) {
  return (
    <div className="container city-info">
      <div className="row ">
        <div className="col-4 city-temp">
          <span>{props.data.temperature}</span>
          <span className="units">°C</span>
        </div>
        <div className="col-4 ">
          <h4 className="city-name">{props.data.city}</h4>
          <h4 className="time-format">
            <CoolDate date={props.data.date} />
          </h4>
        </div>
        <div className="col-4">
          <img
            className="weather-icon"
            alt="wather-icon"
            id="weather-now"
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
          />
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
