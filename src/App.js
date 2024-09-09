import React, { Component } from "react";
import './App.css';
import Searchbar from "./components/Searchbar";
import CurrentForecast from "./components/CurrentForecast";
import FutureForecast from "./components/FutureForecast";
import { apikey } from "./apikey";
import { getBackgroundImage } from "./getBackground";

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
    fetch("http://api.weatherapi.com/v1/current.json?key="+ process.env.KEY +"&q=auto:ip&aqi=no")
    .then((response) => response.json())
    .then((data) => {
      try{
        this.setState({
          city: data.location.name,
          region: data.location.region,
          temperature: data.current.temp_f,
          conditions: data.current.condition.text,
          image: getBackgroundImage(data.current.condition.text),
          
        })
    }
      catch(error){}
    })
    fetch("http://api.weatherapi.com/v1/forecast.json?key="+ process.env.KEY +"&q=auto:ip&aqi=no")
    .then((response) => response.json())
    .then((data) => {
        try{
            console.log(data)
            this.setState({
              forecast : data.forecast.forecastday[0].hour
            })
        }
          catch(error){}
        })
  }

  //Function called when user completes search request. Parameter takes location and makes API call with it to get current weather and forecast of requested location
  handleCallback = (childData) => {
    fetch("http://api.weatherapi.com/v1/current.json?key="+ process.env.KEY +"&q=" + childData + "&aqi=no")
    .then((response) => response.json())
    .then((data) => {
      try{
        this.setState({
          city: data.location.name,
          region: data.location.region,
          temperature: data.current.temp_f,
          conditions: data.current.condition.text,
          image: getBackgroundImage(data.current.condition.text),
        })
    }
      catch(error){}
    })
    fetch("http://api.weatherapi.com/v1/forecast.json?key="+ process.env.KEY +"&q=" + childData + "&aqi=no")
    .then((response) => response.json())
    .then((data) => {
        try{
            console.log(data)
            this.setState({
              forecast : data.forecast.forecastday[0].hour
            })
        }
          catch(error){}
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
