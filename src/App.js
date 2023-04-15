import "./App.css";
import Search from "./Search";
import Weather from "./Weather";

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
          <Search />
        </div>
        <Weather />
        <br />
      </div>
    </div>
  );
}

export default App;
