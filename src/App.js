import React from "react";
import './App.css';
import Searchbar from "./components/Searchbar";
import CurrentForecast from "./components/CurrentForecast";

function App() {
  return(
    <div className="App">
      <div className="header">
        <Searchbar />
      </div>
      <div className="main">
        <CurrentForecast />
      </div>
    </div>
  );
}

export default App;
