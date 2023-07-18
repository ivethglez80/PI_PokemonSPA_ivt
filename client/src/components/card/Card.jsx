import React from "react";
import { NavLink } from "react-router-dom";
import imgNotFound from "../../img/imgNotFound.png";
import styles from "../card/card.module.css";

export default function Card({ name, image, types, id }) { 

  const formatID = (id) => {
    return String(id).substring(0, 4); // Limita el ID a 4 caracteres
};

  return (
    <div>
      <NavLink className={styles.none} to={`pokemon/${id}`}>
        <div>
          <img
            className={styles.img}
            src={image ? image : imgNotFound}
            alt="img not found"
            width="200px"
            height="250vh"
          />
          <div className={styles.cardBg}>
            <h3 className={styles.pokeNameTxt}>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
            <div className={styles.tarjeta}>
              <div className={styles.typesContainer}>
                <p className={styles.id}>{formatID(id)}</p>
                {
               types &&
               (typeof types === 'string' ? (
                 <div className={styles.types}>
                   <p className={styles.typestext}>{types.charAt(0).toUpperCase() + types.slice(1)}</p>
                 </div>
               ) : (
                 types.map((p, k) => (
                   <div className={styles.types} key={k}>
                     <p className={styles.typestext}>{p.name.charAt(0).toUpperCase() + p.name.slice(1)}</p>
                   </div>
                 ))
               ))
                }

              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}














