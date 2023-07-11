import React from "react";
import {Link} from "react-router-dom";
import Pokemonlogo from "../../img/Pokemon-logo.png"
import styles from "./navBar.component.css"

const Nav = () =>{
    return (
        <header>
            <nav className={styles.nav}>
                <div>
                    <img src={Pokemonlogo} alt="logo pokemon" className={styles.img} />
                </div>
                <div>
                    <Link to="/pokemonCreate">
                        <button className={styles.btn}>Create a Pokemon</button>
                    </Link>
                    <Link to="/aboutdev">
                        <button className={styles.btn}>Dev, I chose you!</button>
                    </Link>
                </div>
            </nav>
        </header>
    )
};

export default Nav;