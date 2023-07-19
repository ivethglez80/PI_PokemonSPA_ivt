import React from "react";
import styles from './pagination.module.css'

const Pagination = ({pokemonsPerPage, allPokemons, page}) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allPokemons/pokemonsPerPage); i++) {
        pageNumbers.push(i);        
    }

    return ( 
        <nav>
            <div className="page">
           { 
           pageNumbers && pageNumbers.map((number) =>{  
             return( 
               <div className="pageBottom" key={number}>
                <button className="pageButton" onClick={()=>page(number)}> {number} </button>
               </div>
             )
           })}
        </div>
        </nav>
     );
}
 
export default Pagination;