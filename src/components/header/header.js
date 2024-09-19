import logo from "../../images/logo.svg";
import React from "react";
import DogImage from "../dog-image/dog-image";
import styles from "./header.module.css";
import dogImagePath from '../../images/dog.png';

class Header extends React.Component {
    render() {
        return (
            <header className={styles.header}>
                <img src={logo} className={styles.logo} alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <DogImage image={dogImagePath} name="Rubymine" description="cool" />

                <a
                    className={styles.link}
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