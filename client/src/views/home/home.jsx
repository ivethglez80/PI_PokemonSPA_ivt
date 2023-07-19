// import React, {useState ,useEffect} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import { cleanPokemons ,getPokemons } from "../../reducer/actions";
// import Nav from "../../components/navbar/navBar"
// import Card from "../../components/card/Card"
// import styles from "./home.module.css";
// import Filters from "../../components/filters/Filters"




// export default function Home(){
// const dispatch = useDispatch();

// const allPokemons = useSelector((state)=>state.pokemons);
// console.log("quienes son allPokemons:");
// console.log(allPokemons);
// const [currentPage, setCurrentPage] = useState("1");
// const [order, setOrder] = useState("1");

//     useEffect(()=>{
//         dispatch(getPokemons())
//     },[dispatch]);

//     const handleClick = (e) =>{
//         e.preventDefault();
//         dispatch(cleanPokemons(dispatch));
//         dispatch(getPokemons());
//     };

//     return(
//         <div>
//          <div className={styles.background}>
//             <Nav />
//         <div>
//             <Filters  setOrder={setOrder}/>
//             <button onClick={e=>{handleClick(e)}}>Clean Filters</button>
//         </div>
        
//         <div className={styles.cards}>
//             {
//                allPokemons?.map((p,k)=>{
//                 return (
//                     <div key={k} className={styles.card}>
//                         <Card
//                             key={p.id}
//                             id={p.id}
//                             name={p.name}
//                             image={p.img}
//                             types={p.types}
//                         />

//                     </div>
//                 )
//                }) 
//             }

//         </div>
//         </div>
//         </div>
//     )
// }


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
import Filters from "../../components/filters/Filters";

export default function Home() {
  const dispatch = useDispatch();

  const allPokemons = useSelector((state) => state.pokemons);
  const allTypes = useSelector((state) => state.types);
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState("");

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
    <div>
      <div className={styles.background}>
        <Nav />
        <div>
          <div className={styles.filters}>
            <div>
              <h3>Filters</h3>
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

            <div>
              <h4> Order </h4>
              <select onChange={handleFilterAttack}>
                <option value=""> Strength </option>
                <option value="asc"> ASC </option>
                <option value="desc"> DESC </option>
              </select>

              <h4 className="Subtitulo">Filter by alphabet</h4>
              <select onChange={handleOrderAlph}>
                <option value=""> ALL </option>
                <option value="asc"> A-Z </option>
                <option value="desc"> Z-A </option>
              </select>
            </div>
          </div>
          <button onClick={handleClick}>Clean Filters</button>
        </div>

        <div className={styles.cards}>
          {allPokemons?.map((p, k) => (
            <div key={k} className={styles.card}>
              <Card
                key={p.id}
                id={p.id}
                name={p.name}
                image={p.img}
                types={p.types}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
