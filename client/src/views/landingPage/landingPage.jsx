import React from "react";
import {Link} from 'react-router-dom';
import styles from "./landingPage.module.css"
import ashImage from "../../img/ashnb.png";
import pokeball from "../../img/pokeballletsgo.png"


export default function landingPage(){
    return (
        <div className={styles.background}>
        <div className={styles.ash}>
            <img src={ashImage} alt="ash" className={styles.ash} /> 
        </div>
        <Link to="/home">
            <img src={pokeball} alt="pokemonBall" className={styles.pb}/>
            {/* <button className={styles.buttonIng}>Let's go!</button> */}
        </Link>
        </div>
    )
};