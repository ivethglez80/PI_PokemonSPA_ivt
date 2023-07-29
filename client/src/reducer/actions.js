import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const CLEAN_POKEMONS = "CLEAN_POKEMONS";
export const GET_ALLTYPES = "GET_ALLTYPES";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_ALPH = "ORDER_ALPH";
export const FILTER_TYPE = "FILTER_TYPE";
export const ORDER_ATTACK = "ORDER_ATTACK";
export const GET_POKEMON_NAME = "GET_POKEMON_NAME";
export const POST_POKEMON = "POST_POKEMON";
export const GET_DETAILS = "GET_DETAILS";
export const CLEAN_DETAIL = "CLEAN_DETAILS";

export const getPokemons=()=>{
    return async (dispatch)=>{
        try {
            let url = "http://localhost:3001/pokemons";
            let json = await axios.get(url);
            return dispatch({
                type : GET_POKEMONS,
                payload:json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
};

export const cleanPokemons = ()=>{
    return ({
        type: CLEAN_POKEMONS,
        payload:[]
    })
};

export const getAlltypes = ()=>{
    return async (dispatch)=>{
        try {
            let url = "http://localhost:3001/types";
            let json = await axios.get(url);
            return dispatch({
                type : GET_ALLTYPES,
                payload : json.data
            });
        } catch (error) {
            console.log(error);
        }
    }
};

export const filterCreated = (payload)=>{
    return{
        type: FILTER_CREATED,
        payload : payload
    }
};

export const orderAlph = (payload)=>{
    return{
        type: ORDER_ALPH,
        payload: payload
    }
}

export const filterType = (payload)=>{
    return{
        type: FILTER_TYPE,
        payload: payload
    }
};

export const filterAttack = (payload)=>{
    return {
        type : ORDER_ATTACK,
        payload: payload
    }
};

export const getPokemonByName = (name)=>{
    return async (dispatch) =>{
        try {
            let json = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
            return dispatch({
                type: GET_POKEMON_NAME,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
};

export const postPokemon = (payload)=>{
    return async (dispatch)=>{
        try{
            let createPoke = await axios.post('http://localhost:3001/pokemons', payload);
            
            return dispatch({
                type: POST_POKEMON,
                payload: createPoke.data
            });
        }catch (error){
            console.log(error);
        }
    }
};

export function getDetailPromise (id){
    return function (dispatch){
        axios.get(`http://localhost:3001/pokemons/${id}`)
        .then(res=>res.data)
        .then(res=>dispatch({
            type : GET_DETAILS,
            payload : res
        }))
        .catch(error=>console.log(error))
    }
};

export const cleanDetail = ()=>{
    return ({
        type: CLEAN_DETAIL,
        payload: []
    })
};

