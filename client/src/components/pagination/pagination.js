import React from "react";
import styles from './pagination.module.css'

const Pagination = ({pokemonsPerPage, allPokemons, page}) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allPokemons/pokemonsPerPage); i++) {
        pageNumbers.push(i);        
    }

    return ( 
        <nav>
            <div className={styles.page}>
           { 
           pageNumbers && pageNumbers.map((number) =>{  
             return( 
               
                <button className={styles.pageBtn} onClick={()=>page(number)}> {number} </button>
               
             )
           })}
        </div>
        </nav>
     );
}
 
export default Pagination;