import React, {Component} from "react";
import '../styles/FutureForecast.css';
import { apikey } from "../apikey";

class FutureForecast extends Component{

    render(){

        try{
            var hourForecast = this.props.forecast.map(item => <div className="hour" id="hour"><h1>{item.time.slice(11)}</h1><p id='condition'><img src={item.condition.icon}></img>{item.condition.text}</p><h2>{item.temp_f}°F</h2></div>);
        }
        catch(error){}

        return(
            <div className="tile-container">
                {hourForecast}
            </div>
        );
    }
}

export default FutureForecast;