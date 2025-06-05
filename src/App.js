import React, { Component } from "react";
import './App.css';
import Searchbar from "./components/Searchbar";
import CurrentForecast from "./components/CurrentForecast";
import FutureForecast from "./components/FutureForecast";
import { getBackgroundImage } from "./getBackground";

//auto:ip


class App extends Component {

  state = {
    city: "",
    region: "",
    temperature: "",
    conditions: "",
    image: "",
    forecast: [],
  }

  //As soon as component renders, call API and get current weather and forecast using the user's IP
  componentDidMount(){
    const query = 'auto:ip';
    fetch(`http://localhost:4000/api/weather?query=${query}`)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
          city: data.location.name,
          region: data.location.region,
          temperature: data.current.temp_f,
          conditions: data.current.condition.text,
          image: getBackgroundImage(data.current.condition.text),
      })
    })
    fetch(`http://localhost:4000/api/forecast?query=${query}`)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
          forecast : data.forecast.forecastday[0].hour
      })
    })
  }

  //Function called when user completes search request. Parameter takes location and makes API call with it to get current weather and forecast of requested location
  handleCallback = (childData) => {
    const query = childData;
    fetch(`http://localhost:4000/api/weather?query=${query}`)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
          city: data.location.name,
          region: data.location.region,
          temperature: data.current.temp_f,
          conditions: data.current.condition.text,
          image: getBackgroundImage(data.current.condition.text),
      })
    })
    fetch(`http://localhost:4000/api/forecast?query=${query}`)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
          forecast : data.forecast.forecastday[0].hour
      })
    })
  }


  render(){
    const { city } = this.state;
    const { region } = this.state;
    const { temperature } = this.state;
    const { conditions } = this.state;
    const { image } = this.state;
    const { forecast } = this.state;
    return(
      <div className="App" style={{backgroundImage: 'url('+image+')',backgroundSize: 'cover'}}>
        <div className="header">
          <Searchbar parentCallback={this.handleCallback}/>
        </div> 
        <div className="main" >
          <CurrentForecast 
            city = {city}
            region = {region}
            temperature = {temperature}
            conditions = {conditions}
          />
        </div>
        <div className="future">
          <FutureForecast
            forecast = {forecast}
          />
        </div>
      </div>
    );
  }
}

export default App;
