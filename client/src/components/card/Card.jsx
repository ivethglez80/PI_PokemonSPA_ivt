import React from "react";
import { NavLink } from "react-router-dom";
import imgNotFound from "../../img/imgNotFound.png";
import styles from "../card/card.module.css";

export default function Card({ name, image, types, id, attack }) { 

  const formatID = (id) => {
    return String(id).substring(0, 4); // Limita el ID a 4 caracteres
};

  return (
    <div className={styles.baseCard}>
      <NavLink className={styles.none} to={`pokemon/${id}`}>
        <div className={styles.cardFull}>
          <img
            className={styles.img}
            src={image ? image : imgNotFound}
            alt="img not found"
            width="200px"
            height="250vh"
          />
          <div>
         
          <div className={styles.nameDiv}>
            <h3 className={`${styles.pokeNameTxt} ${styles['pokeNameTxt-h3']}`}>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
            <p className={`${styles.pokeNameTxt} ${styles['pokeNameTxt-p']}`}> Attack: {attack} </p>
          </div>

            <div>
              <div className={styles.typesContainer}>
                 <p className={styles.id}></p> 
              {
               types &&
               (typeof types === 'string' ? (                
                   <p className={styles.typestext}>{types.charAt(0).toUpperCase() + types.slice(1)}</p>                
               ) : (
                 types.map((p, k) => (                  
                     <p className={styles.typestext}>{p.name.charAt(0).toUpperCase() + p.name.slice(1)}</p>                  
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














