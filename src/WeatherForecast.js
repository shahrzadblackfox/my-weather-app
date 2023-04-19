import React, { useState } from "react";

import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handelResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        <div className="row">
          <div className="col ">
            <ForecastDay data={forecast[1]} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "4b44333bbcda5f0o6aaf4bt96ce9c0cd";
    let lat = props.coordinates.longitude;
    let lon = props.coordinates.latitude;
    let urlApi = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

    axios.get(urlApi).then(handelResponse);
    return null;
  }
}
