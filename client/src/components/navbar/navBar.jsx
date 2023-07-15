import React from "react";
import {Link} from "react-router-dom";
import Pokemonlogo from "../../img/Pokemonlogo.png"
import styles from "./navBar.module.css"
import SearchBar from "../searchbar/searchBar";
import devChsImg from "../../img/devChsImg.png";
import createImg from "../../img/createImg.png";

const Nav = () =>{
    return (
        <header>
                
            <nav className={styles.nav}>
                <div className={styles.navaround}>
                  
                    <img src={Pokemonlogo} alt="logo pokemon" className={styles.img} />
                    

                    <div className={styles.crea} >
                    <Link to="/pokemonCreate">
                        <button className={styles.comic}>
                            <img className={styles.createImg} src={createImg} alt="create a pokemon button" />
                        </button>
                    </Link>
                    </div>

                    <div className={styles.busca} >
                    <SearchBar />
                    </div>

                    <div className={styles.abDev} >
                    <Link to="/aboutdev">
                        <button className={styles.comic}>
                            <img className={styles.imgDev} src={devChsImg} alt="about me button" />
                        </button>
                    </Link>
                    </div>
                </div>
            </nav>
                
        </header>
    )
};

export default Nav;