import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlltypes, filterCreated, orderAlph, filterType, filterStr } from "../../reducer/actions";

import styles from "./Filters.module.css"

const Filters = ({setCurrentPage, setOrder}) =>{
    const dispatch=useDispatch();
    const allTypes=useSelector((state)=>state.types);

    useEffect(()=>{
        dispatch(getAlltypes())
    },[dispatch]);

    const handleFilterCreated = (e) =>{
        e.preventDefault();
        const payload = e.target.value;
        dispatch(filterCreated(payload));
        setCurrentPage(1);
    };

    const handleOrderAlph = (e) =>{
        e.preventDefault();
        dispatch(orderAlph(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    };

    const handleFilterType = (e) =>{
        e.preventDefault();
        dispatch(filterType(e.target.value));
        setCurrentPage(1);
    };

    const handleFilterStr = (e) =>{
        e.preventDefault();
        dispatch(filterStr(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    };

    return (
        <div className={styles.filters}>
            

            <div>
                <h3>Filters</h3>
                <label>Created/Api</label>
                <select onChange={e=>{handleFilterCreated(e)}} >
                <option value="all"> -ALL- </option>
                <option value="api"> API </option>
                <option value="created"> CREATED </option>
                </select>

                <label> Types </label>
                <select onChange={e=>{handleFilterType(e)}}>
                    <option value="all"> ALL </option>
                    {
                        allTypes?.map (e=>{
                            return(
                                <option key={e.id} value={e.name}>{e.name.toUpperCase()}</option>
                            )
                        })
                    }
                </select>
            </div>

            <div>
                <h4> Order </h4>
                <select>
                    <option> Strength </option>
                    <option value="asc"  onClick={e=>handleFilterStr(e)} > ASC </option>
                    <option value="desc" onClick={e=>handleFilterStr(e)}> DESC </option>
                </select>

                <select>
                    <option> Alphabetically </option>
                    <option value="asc"  onClick={e=>handleOrderAlph(e)} > A-Z </option>
                    <option value="desc" onClick={e=>handleOrderAlph(e)}> Z-A </option>
                </select>
            </div>

        </div>
    );
};

export default Filters;