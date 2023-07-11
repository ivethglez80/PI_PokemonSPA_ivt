import React from "react";
import {NavLink} from "react-router-dom";
import imgNotFound from "../../img/imgNotFound.png";
import styles from "../card/card.module.css"

export default function Card({name, image, types, id}){
    return(
    <div>
        <NavLink className={styles.none} to={`pokemon/${id}`}>
            <div>
                <img className={styles.img} src={image ? image :imgNotFound} alt="img not found" width="200px" height="250vh" />
                <h3>{name.charAt(0).toUpperCase()+name.slice(1)}</h3>
                    <p>{id}</p>
                <div className={styles.types}>
                    {
                        types?.map((p,k)=>(
                            <div key={k}>
                            {/* <img className={styles.typesImg} src={p.img} alt={p.img} />                             */}
                            <p>{p.name.charAt(0).toUpperCase()+p.name.slice(1)}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </NavLink>
    </div>
    )
}

