// import React, {useEffect, useState} from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getPokemons, getAlltypes, filterCreated, orderAlph, filterType, filterAttack } from "../../reducer/actions";

// import styles from "./Filters.module.css"

// // const Filters = ({setCurrentPage, setOrder}) =>{
// const Filters = () =>{ 
//     const dispatch=useDispatch();
//     const [order, setOrder] = useState();
//     const allTypes=useSelector((state)=>state.types);


//     useEffect(()=>{
//         dispatch(getAlltypes())
//     },[dispatch]);

//     const handleFilterCreated = (e) =>{
//         e.preventDefault();
//         const payload = e.target.value;
//         dispatch(filterCreated(payload));
//         // setCurrentPage(1);
//     };

//     const handleOrderAlph = (e) =>{
//         e.preventDefault();
//         dispatch(orderAlph(e.target.value));
//         // setCurrentPage(1)
//         setOrder(e.target.value);
//         dispatch(getPokemons());
//         console.log(getPokemons);
//     };

//     const handleFilterType = (e) =>{
//         e.preventDefault();
//         dispatch(filterType(e.target.value));
//         // setCurrentPage(1);
//     };

//     const handleFilterAttack = (e) =>{
//         e.preventDefault();
//         dispatch(filterAttack(e.target.value));
//         // setCurrentPage(1);
//         setOrder(e.target.value);
//     };

//     return (
//         <div className={styles.filters}>
            

//             <div>
//                 <h3>Filters</h3>
//                 <label>Created/Api</label>
//                 <select onChange={e=>{handleFilterCreated(e)}} >
//                 <option value="all"> -ALL- </option>
//                 <option value="api"> API </option>
//                 <option value="created"> CREATED </option>
//                 </select>

//                 <label> Types </label>
//                 <select onChange={e=>{handleFilterType(e)}}>
//                     <option value="all"> ALL </option>
//                     {
//                         allTypes?.map (e=>{
//                             return(
//                                 <option key={e.id} value={e.name}>{e.name.toUpperCase()}</option>
//                             )
//                         })
//                     }
//                 </select>
//             </div>

//             <div>
//                 <h4> Order </h4>
//                 <select onChange={e=>handleFilterAttack(e)}>
                    
//                     <option value=""      > Strength </option>
//                     <option value="asc"   > ASC </option>
//                     <option value="desc"  > DESC </option>
//                 </select>
                
//                 <h4 className="Subtitulo">Filter by alphabet</h4>
//                 <select onChange={(e)=>handleOrderAlph(e)}>
//                     <option value="" > ALL </option>
//                     <option value="asc" > A-Z </option>
//                     <option value="desc"> Z-A </option>
//                 </select>
//             </div>

//         </div>
//     );
// };

// export default Filters;