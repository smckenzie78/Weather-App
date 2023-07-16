import React from "react";
import '../styles/CurrentForecast.css';

function CurrentForecast(){
    return(
        <div className="information">
            <p id="location">Jacksonville, Florida</p>
            <p id="temperature">92&deg;</p>
            <p id="weather">Cloudy</p>
        </div>
    );
}

export default CurrentForecast;