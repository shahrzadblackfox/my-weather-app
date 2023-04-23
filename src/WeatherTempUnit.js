import React, { useState } from "react";
import ForecastDay from "./ForecastDay";

export default function WeatherTempUnit(props) {
  const [unit, setUnit] = useState("celsius");
  function showFarn(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }
  if (unit === "celsius") {
    return (
      <div>
        <span>{props.celsius}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFarn}>
            °F
          </a>
        </span>
        <ForecastDay unit="cel" />
      </div>
    );
  } else {
    return (
      <div>
        <span>{fahrenheit()}</span>
        <span className="units">
          <a href="/" onClick={showCel}>
            °C{" "}
          </a>
          | °F
        </span>
        <ForecastDay unit="fahren" />
      </div>
    );
  }
}
