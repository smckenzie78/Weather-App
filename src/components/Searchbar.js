import React, { Component } from "react";
import '../styles/Searchbar.css';
import { apikey } from "../apikey";

const API_KEY = process.env.REACT_APP_API_KEY
const apikeyy = "d74014e9d48b40108ca04059231707";

class Searchbar extends Component{

    state = {
        search: []
    }

    optionSelect(option) {
        console.log('what');
        document.getElementById('searchbar').value = option;
        this.props.parentCallback(document.getElementById('searchbar').value);
        this.setState({
            search : ""
        })
    }
    
    onTrigger = (event) => {
        if(event.key === "Enter"){
            //console.log("It works")
            document.getElementById('searchbar').value = this.state.search[0].name + ', ' +this.state.search[0].region;
            this.props.parentCallback(document.getElementById('searchbar').value);
            this.setState({
                search : ""
            })
            event.preventDefault();
        }
        else{
            fetch("http://api.weatherapi.com/v1//search.json?key="+ apikeyy +"&q="+document.getElementById('searchbar').value+"&aqi=no")
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    search : data
                })
            })
        }
    }

    onBlurSearchBar(){
        setTimeout(() => {
            this.setState({
                search : ""
            })
        }, 100);
        
    }
    
    render(){
        try{
            var searchOptions = this.state.search.map(item => <div className="option" id="option" onClick={() => this.optionSelect(item.name + ', ' + item.region)}>{item.name + ', ' + item.region}</div>);
        }
        catch(error){}

        return(
            <div className="search-container">
                <input type="text" id="searchbar" onKeyDown={this.onTrigger} placeholder="Enter in a location..." autoComplete="off"></input>
                <div className="search-options">
                    {searchOptions}
                </div>
            </div>
        );
    }
}

export default Searchbar;