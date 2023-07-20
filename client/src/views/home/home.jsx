import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanPokemons,
  getPokemons,
  getAlltypes,
  filterCreated,
  orderAlph,
  filterType,
  filterAttack,
} from "../../reducer/actions";
import Nav from "../../components/navbar/navBar";
import Card from "../../components/card/Card";
import styles from "./home.module.css";
import Pagination from '../../components/pagination/pagination';

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const allTypes = useSelector((state) => state.types);

  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(5);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

    const page = pageNumber => {
        setCurrentPage(pageNumber);
    }

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getAlltypes());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(cleanPokemons(dispatch));
    dispatch(getPokemons());
    dispatch(getAlltypes(dispatch))
  };

  const handleFilterCreated = (e) => {
    e.preventDefault();
    const payload = e.target.value;
    dispatch(filterCreated(payload));
    setCurrentPage(1);
    setOrder(payload)
  };

  const handleOrderAlph = (e) => {
    e.preventDefault();
    dispatch(orderAlph(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  };

  const handleFilterType = (e) => {
    e.preventDefault();
    dispatch(filterType(e.target.value));
    setCurrentPage(1);
  };

  const handleFilterAttack = (e) => {
    e.preventDefault();
    dispatch(filterAttack(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  };

  return (
  <div className={styles.gridContainer}>
    
      <div className={styles.background}>
        <Nav className={styles.navDiv}/>
        <div className={styles.filtersNdivs}>
          
              <h4>Filters</h4>
              <div className={styles.filtersDiv}>
              <label>Created/Api</label>
              <select onChange={handleFilterCreated}>
                <option value="all"> -ALL- </option>
                <option value="api"> API </option>
                <option value="created"> CREATED </option>
              </select>

              <label> Types </label>
              <select onChange={handleFilterType}>
                <option value="all"> ALL </option>
                {allTypes?.map((e) => (
                  <option key={e.id} value={e.name}> {e.name.toUpperCase()} </option>
                ))}
              </select>
              </div>

              <h4> Order </h4>
              <div className={styles.orderDiv}>
              <label> Strength </label>
              <select onChange={handleFilterAttack}>
                <option value=""> Strength </option>
                <option value="asc"> ASC </option>
                <option value="desc"> DESC </option>
              </select>

              <label> A to Z? </label>
              <select onChange={handleOrderAlph}>
                <option value=""> ALL </option>
                <option value="asc"> A-Z </option>
                <option value="desc"> Z-A </option>
              </select>
              </div>
            

        </div>
          <div className={styles.btncontainer}>
          <button className={styles.btnAlone} onClick={handleClick}>Clean Filters</button>
          </div>

        <div className={styles.cardsContainer}>
          {currentPokemons?.map((p) => (
            <div key={p.id} className={styles.card}>
              <Card
                key={p.id}
                id={p.id}
                name={p.name}
                image={p.img}
                attack={p.attack}
                types={p.types}
              />
            </div>
          ))}
        </div>
        
        <div className={styles.pagescroll}>
        <section className={styles.pagescrollButtons}>
             <Pagination
              pokemonsPerPage={pokemonsPerPage}
              allPokemons={allPokemons.length}
              page={page}
             />
        </section>    
        </div>

      </div>
    
</div>
  );
}
