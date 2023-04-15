import React from "react";
import CoolDate from "./CoolDate";

import "./Weather.css";
export default function Weather() {
  return (
    <div className="container city-info">
      <div className="row ">
        <div className="col-4 city-temp">
          <span>15</span>
          <span className="units">°C</span>
        </div>
        <div className="col-4 ">
          <h4 className="city-name">Tehran</h4>
          <h4 className="time-format">
            <CoolDate date={weatherData.date} />
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
        <div className="col-4">Description:</div>
        <div className="col-4">Humidity:</div>
        <div className="col-4">Wind:</div>
      </div>
      <div className="row forecast-info">
        <h2>Next 5 day:</h2>
      </div>
    </div>
  );
}
