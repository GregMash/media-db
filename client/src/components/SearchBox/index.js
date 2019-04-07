import React from "react";
import "./style.css";

function SearchBox(props, children) {
    return (
        <div className="input-group input-group-lg bg-dark text-info book-search">
            <h4 className="search-starter">Book Search</h4>
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">Book Name</span>
            </div>
            <input type="text" {...props} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
        </div>
    );
};

export default SearchBox;