import React, { Component } from "react";
import '../styles/Searchbar.css';
import { apikey } from "../apikey";

class Searchbar extends Component{

    state = {
        search: []
    }

    optionSelect(option) {
        document.getElementById('searchbar').value = option;
        this.props.parentCallback(option);
    }
    
    onTrigger = (event) => {
        if(event.key === "Enter"){
            //console.log("It works")
            this.props.parentCallback(document.getElementById('searchbar').value);
            event.preventDefault();
        }
        else{
            fetch("http://api.weatherapi.com/v1//search.json?key="+ apikey +"&q="+document.getElementById('searchbar').value+"&aqi=no")
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    search : data
                })
            })
        }
    }
    
    render(){
        try{
            var searchOptions = this.state.search.map(item => <div className="option" id="option">{item.name + ', ' + item.region}</div>);
            var option = document.getElementById('option');
            option.onclick = () => {
                this.optionSelect(document.getElementById('option').innerHTML)
                this.setState({
                    search : ""
                })
            }
        }
        catch(error){}

        return(
            <div className="search-container">
                <input type="text" id="searchbar" onKeyPress={this.onTrigger} placeholder="Enter in a location..." autoComplete="off"></input>
                <div className="search-options">
                    {searchOptions}
                </div>
            </div>
        );
    }
}

export default Searchbar;