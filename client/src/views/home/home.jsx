import React, {useState ,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { cleanPokemons ,getPokemons } from "../../reducer/actions";
import Nav from "../../components/navbar/navBar"
import Card from "../../components/card/Card"
import styles from "./home.module.css";
import Filters from "../../components/filters/Filters"
import devChsImg from "../../img/devChsImg.png";



export default function Home(){
const dispatch = useDispatch();
const allPokemons = useSelector((state)=>state.pokemons)

const [currentPage, setCurrentPage] = useState(1);
const [order, setOrder] = useState("6");

    useEffect(()=>{
        dispatch(getPokemons())
    },[dispatch]);

    const formatID = (id) => {
        return String(id).substring(0, 4); // Limita el ID a 4 caracteres
    };

    const handleClick = (e) =>{
        e.preventDefault();
        dispatch(cleanPokemons(dispatch));
        dispatch(getPokemons());
    };

    return(
        <div>
         <div className={styles.background}>
        <Nav />
        <div>
            <Filters setCurrentPage={setCurrentPage} setOrder={setOrder}/>
            console.log(setOrder);
            <button onClick={e=>{handleClick(e)}}>Clean Filters</button>
        </div>
        <div className={styles.cards}>
            {
               allPokemons?.map((p,k)=>{
                return (
                    <div key={k} className={styles.card}>
                        <Card
                            key={p.id}
                            id={formatID(p.id)}
                            name={p.name}
                            image={p.img}
                            types={p.types}
                        />

                    </div>
                )
               }) 
            }

        </div>
        </div>
        </div>
    )
}