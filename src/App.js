import "./App.css";
import WeatherSearch from "./Search";

function App() {
  return (
    <div className="App ">
      <div className="container">
        <div className="row heading-title">
          <h1>
            <i className="fa-solid fa-rainbow" />
            Weather Forecast
          </h1>
        </div>

        <div className="searchForm">
          <WeatherSearch deafultCity="Lisbon" />
        </div>

        <br />
      </div>
    </div>
  );
}

export default App;
