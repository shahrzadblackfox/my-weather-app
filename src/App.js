import "./App.css";
import Search from "./Search";
import Weather from "./Weather";

function App() {
  return (
    <div className="App ">
      <div className="container">
        <Weather />
        <div className="searchForm">
          <Search />
        </div>
        <br />
      </div>
    </div>
  );
}

export default App;
