import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cleanPokemons, getPokemonByName } from "../../reducer/actions";
import styles from "./searchBar.module.css"

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name,setName] = useState("");

    const handleInputchange = (e) =>{
        e.preventDefault();
        setName(e.target.value);
        console.log("Name", name );
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(cleanPokemons(dispatch));
        dispatch(getPokemonByName(name));
        setName("");
    }

    return(
        <div>
            <form onSubmit={e=>{handleSubmit(e)}}>
                <input type="text" placeholder="Search" onChange={e=>{handleInputchange(e)}} value={name}/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;