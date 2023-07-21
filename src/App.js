import React, { Component } from "react";
import './App.css';
import Searchbar from "./components/Searchbar";
import CurrentForecast from "./components/CurrentForecast";
import { apikey } from "./apikey";

class App extends Component {

  state = {
    city: "",
    region: "",
    temperature: "",
    conditions: "",
  }

  handleCallback = (childData) => {
    fetch("http://api.weatherapi.com/v1/current.json?key="+ apikey +"&q=" + childData + "&aqi=no")
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        city: data.location.name,
        region: data.location.region,
        temperature: data.current.temp_f,
        conditions: data.current.condition.text,
      })
    })
  }

  render(){
    const { city } = this.state;
    const { region } = this.state;
    const { temperature } = this.state;
    const { conditions } = this.state;
    return(
      <div className="App">
        <div className="header">
          <Searchbar parentCallback={this.handleCallback}/>
        </div>
        <div className="main">
          <CurrentForecast 
            city = {city}
            region = {region}
            temperature = {temperature}
            conditions = {conditions}
          />
        </div>
      </div>
    );
  }
}

export default App;
