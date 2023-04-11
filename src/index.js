import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Search from "./Search";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <div className="searchForm">
      <Search />
    </div>
    <br />
    <div className="end-note">
      This project was coded by Shahrzad Amirrahimi and is{" "}
      <a href="https://github.com/shahrzadblackfox/my-weather-app/tree/master/src">
        open-sourced{" "}
      </a>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
