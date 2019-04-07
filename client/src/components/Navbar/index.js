import React from "react";
import "./style.css";

// state = {
//     hamburger: "hamburger"
// };

function Navbar() {
    return (
        <nav className="container">
            <a className="home" href="/">Media DB</a>

            <div className="{this.state.hamburger} onClick={this.state.hamburger }">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>

            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link" href="../search/books">Search</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="../saved/books">Saved</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;