import logo from "../../images/logo.svg";
import React from "react";
import DogImage from "../dog-image/dog-image";

class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <DogImage />

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        )
    }
}

export default Header;