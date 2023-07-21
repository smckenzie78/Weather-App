import React, { Component } from "react";
import '../styles/Searchbar.css';

class Searchbar extends Component{
    
    onTrigger = (event) => {
        if(event.key === "Enter"){
            //console.log("It works")
            this.props.parentCallback(document.getElementById('searchbar').value);
            event.preventDefault();
        }
    }
    
    render(){
        return(
            <div className="search-container">
                <input type="text" id="searchbar" onKeyPress={this.onTrigger} placeholder="Enter in a location..."></input>
            </div>
        );
    }
}

export default Searchbar;