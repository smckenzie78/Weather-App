import React, { Component } from "react";
import '../styles/CurrentForecast.css';

class CurrentForecast extends Component {

    render(){

        let commaspace = ''
        let degreesymbol = ''
        
        if(this.props.temperature != ""){
            degreesymbol = '°'
        }
        if(this.props.city != ""){
            commaspace = ', '
        }

        return(
            <div className="information">
                <p id="location">{this.props.city + commaspace}{this.props.region}</p>
                <p id="temperature">{this.props.temperature + degreesymbol}</p>
                <p id="weather">{this.props.conditions}</p>
            </div>
        );
    }
}

export default CurrentForecast;