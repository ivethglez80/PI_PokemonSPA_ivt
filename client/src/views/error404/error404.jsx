import React from "react";
import style from "./error404.module.css";
import empty_pokeball from "../../img/empty_pokeball_error.png"
import {NavLink} from "react-router-dom";

export default function error404(){
    return(
        <div className={style.body}>
          <div className={style.imgContainer}>
           <img src={empty_pokeball} alt="img 404" />
            <div className={style.buttonContainer}>
             <NavLink to="/home">
              <button>
              Take me back home!
              </button>
             </NavLink>
          </div>
         </div>
        </div>
    )
}