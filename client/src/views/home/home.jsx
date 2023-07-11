import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getPokemons } from "../../reducer/actions";
import Card from "../../components/card/Card"
import styles from "./home.module.css";



export default function Home(){
const dispatch = useDispatch();
const allPokemons = useSelector((state)=>state.pokemons)

    useEffect(()=>{
        dispatch(getPokemons())
    },[dispatch]);

    return(
        <div className={styles.cards}>
            {
               allPokemons?.map((p,k)=>{
                return (
                    <div key={k} className={styles.card}>
                        <Card
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            image={p.img}
                            types={p.types}
                        />

                    </div>
                )
               }) 
            }

        </div>
    )
}