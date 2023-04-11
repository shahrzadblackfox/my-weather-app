import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Weather() {
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
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2dd4a9a3477a790a05f1be4bfcb55931&units=metric`;
    axios.get(url).then(showTempe);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="search" placeholder="Type a City" onChange={updateCity} />
        <input type="submit" value="Search" className="sumbit-btn" />
      </form>

      <div className="weatherInfo">{showMessage}</div>
    </div>
  );
}
