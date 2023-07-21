import React from "react";
import '../styles/Searchbar.css';
function Searchbar(){
    return(
        <div className="search-container">
            <input type="text" placeholder="Enter in a location..."></input>
        </div>
    );
}

export default Searchbar;