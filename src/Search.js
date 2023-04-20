import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function WeatherSearch(props) {
  const apiKey = "4b44333bbcda5f0o6aaf4bt96ce9c0cd";
  const [weatherData, setWeatherData] = useState({ ready: false });

  const [city, setCity] = useState(props.deafultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function search() {
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }
  function handleSearch(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function currentPosition(position) {
    let long = position.coords.longitude;
    let lat = position.coords.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${long}&lat=${lat}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleCurrent(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentPosition);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSearch} className="row">
          <div className="col-md-8">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Type a City"
              onChange={updateCity}
            />
          </div>
          <div className="col-md-2">
            <input
              type="submit"
              value="Search"
              className="sumbit-btn btn btn-outline-success w-100 btn-small-change"
            />
          </div>
          <div className="col-md-2">
            <input
              type="submit"
              value="Current"
              className="sumbit-btn btn btn-outline-success w-100 btn-small-change"
              onClick={handleCurrent}
            />
          </div>
        </form>
        <Weather data={weatherData} />
        <div className="row forecast-info">
          <h2>Next 5 day:</h2>
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
