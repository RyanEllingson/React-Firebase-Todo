import React from "react";
import "./style.css";

const Header = function() {
    return (
        <nav className="navbar fixed-top navbar-dark bg-dark">
            <div className="container">
                <h3 className="mx-auto">React Firebase To-Do App</h3>
            </div>
        </nav>
    )
}

export default Header;