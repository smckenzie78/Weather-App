import React, { Component } from "react";
import '../styles/Searchbar.css';

class Searchbar extends Component{

    state = {
        search: []
    }

    optionSelect(option) {
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
            const query = document.getElementById('searchbar').value
            fetch(`http://localhost:4000/api/search?query=${query}`)
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