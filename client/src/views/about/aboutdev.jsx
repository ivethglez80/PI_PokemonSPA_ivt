import React from "react"
import { Link } from "react-router-dom";
import styles from "./aboutdev.module.css"
import iveth_dev from "../../img/iveth_dev.png"
import backToHomeButtonImg from "../../img/BacktoHomeButtonImg.png";
import expresslogo from "../../img/expresslogo.png";
import postgrelogo from "../../img/postgrelogo.png";
import nodelogo from "../../img/nodelogo.png";
import reactLogo from "../../img/reactLogo.png";
import linkedinLogo from "../../img/linkedinLogo.png";
import githubLogo from "../../img/githubLogo.png";
import twitterLogo from "../../img/twitterLogo.png";

export default function aboutdev(){
    return(
        <div className={styles.background}>
        <div className={styles.container}>
            
            <div className={styles.devImg}>
                <img className={styles.devImgP} src={iveth_dev} alt="developer" />
            </div>

            <div className={styles.devName}>
                <h3>Iveth Gonzalez</h3>
                <p>Visit me on my socials!</p>

                    <div className={styles.devLinks}>

                        <button className={styles.redesbtn}>
                            <a href="https://www.linkedin.com/in/iveth-gonzalez-98799895/" target="_blank" rel="noopener noreferrer">
                            <img className={styles.devlnksImg} src={linkedinLogo} alt="LinkedIn" />
                            </a>
                        </button>

                        <button className={styles.redesbtn}>
                            <a href="https://github.com/ivethglez80/PI_PokemonSPA_ivt" target="_blank" rel="noopener noreferrer">
                            <img className={styles.devlnksImg} src={githubLogo} alt="GitHub" />
                            </a>
                        </button>

                        <button className={styles.redesbtn}>
                            <a href="https://twitter.com/IvethDev" target="_blank" rel="noopener noreferrer">
                            <img className={styles.devlnksImg} src={twitterLogo} alt="Twitter" />
                            </a>
                        </button>


                    </div>
            </div>

            <div className={styles.devTxt}>
                <p className={styles.devTxtIn}>¡Bienvenido a mi SPA sobre Pokémon!<br />
Mi aplicación está construida con tecnologías modernas <br />
como npm, Node.js, Express, React, Redux, CSS, HTML, JS y JSX, entre otras.<br /><br />
En esta SPA, puedes explorar los Pokémon provenientes de la API. <br />
Utiliza los filtros para buscar por tipo y fortaleza,<br />
 y ordena los resultados alfabéticamente para asi encontrar rápidamente <br />
 tus Pokémon favoritos.<br /><br />

Pero eso no es todo. <br />
¡También puedes crear tus propios Pokémon a través de un formulario!<br />
 Esto te permite agregar Pokémon personalizados <br />
 y filtrarlos junto con los de la API. <br />
 
{/* Como una apasionada de la programación desde muy temprana edad, <br />
puedo decirte que amo codear a pesar de lo frustrante que puede ser en ocasiones. <br />
Siempre encuentro una alegría en cada línea de código que escribo <br />
y en cada problema que resuelvo. <br />
Recuerda, ¡la programación es como un juego de rompecabezas infinito y divertido! */}

¡Explora, descubre, crea y diviértete en mi SPA de Pokémon! <br />
Espero que disfrutes de esta experiencia única <br />
y que te sumerjas en el fascinante mundo de los Pokémon. <br />
¡Atrápalos a todos!
                </p>
            </div>

            <div className={styles.devTch}>
                <img className={styles.devTchImg} src={expresslogo} alt="expresslogo" />
                <img className={styles.devTchImg} src={postgrelogo} alt="postgrelogo" />
                <img className={styles.devTchImg} src={nodelogo} alt="nodelogo" />
                <img className={styles.devTchImg} src={reactLogo} alt="reactlogo" />
            </div>

            

            <div className={styles.divbtn}>
                <Link to="/home">
                    <button className={styles.btn}>
                        <img src={backToHomeButtonImg} alt="Back to Home" />
                    </button>
                </Link>
            </div>
            
        </div>
        </div>
    )
}