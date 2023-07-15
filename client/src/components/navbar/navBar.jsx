import React from "react";
import {Link} from "react-router-dom";
import Pokemonlogo from "../../img/Pokemonlogo.png"
import styles from "./navBar.module.css"
import SearchBar from "../searchbar/searchBar";

const Nav = () =>{
    return (
        <header>
                
            <nav className={styles.nav}>
                <div className={styles.navaround}>
                  
                    <img src={Pokemonlogo} alt="logo pokemon" className={styles.img} />
                    

                    <div className={styles.crea} >
                    <Link to="/pokemonCreate">
                        <button className={styles.btn}>Create a Pokemon</button>
                    </Link>
                    </div>

                    <div className={styles.busca} >
                    <SearchBar />
                    </div>

                    <div className={styles.abdev} >
                    <Link to="/aboutdev">
                        <button className={styles.btn}>Dev, I chose you!</button>
                    </Link>
                    </div>
                </div>
            </nav>
                
        </header>
    )
};

export default Nav;