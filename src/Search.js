import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Weather() {
  const apiKey = "4b44333bbcda5f0o6aaf4bt96ce9c0cd";
  let [showMessage, setShowMessage] = useState("");
  const [city, setCity] = useState("");
  function handleSearch(event) {
    event.preventDefault();
    function showTempe(response) {
      //console.log(response.data.main.temp);
      let temp = Math.round(response.data.main.temp);
      let dis = response.data.weather[0].description;
      let humidity = response.data.main.humidity;
      let wind = response.data.wind.speed;
      let emoji = response.data.weather[0].icon;

      let info = [
        { name: "Temperature", value: `${temp}°C` },
        { name: "Description", value: `${dis}` },
        { name: "Humidity", value: `${humidity}%` },
        { name: "Wind", value: `${wind} km/h` },
      ];
      setShowMessage(
        <ul>
          {info.map((info) => (
            <li key={info.name}>
              {info.name}: {info.value}
            </li>
          ))}
          <img
            src={`https://openweathermap.org/img/wn/${emoji}@2x.png `}
            alt="{info.name.Description}"
          />
        </ul>
      );
    }
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(url).then(showTempe);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

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
            className="sumbit-btn btn btn-outline-success w-100"
          />
        </div>
        <div className="col-md-2">
          <input
            type="submit"
            value="Current"
            className="sumbit-btn btn btn-outline-success w-100"
          />
        </div>
      </form>

      <div className="weatherInfo">{showMessage}</div>
    </div>
  );
}
