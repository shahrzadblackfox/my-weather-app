import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function ForecastDay(props) {
  function showMax() {
    let max = Math.round(props.data.temperature.maximum);
    return max;
  }
  function showMin() {
    let min = Math.round(props.data.temperature.minimum);
    return min;
  }
  function showDay() {
    let date = new Date(props.data.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return day;
  }

  return (
    <div className="waether-forcast">
      <div className="forecast-date">{showDay()}</div>

      <div>
        <WeatherIcon code={props.data.condition.icon} size={43} />
      </div>
      <div>
        <strong>
          <span>{showMax()}</span>
        </strong>
        °<span> {showMin()}°</span>
      </div>
    </div>
  );
}
