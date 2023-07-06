const axios = require('axios');
const { Pokemon, Type } = require('../db'); 

//TRAIGO LOS DATOS DE LA API, HACIENDO OTRO LLAMADO A LA URL DEL POKEMON PARA QUE ME TRAIGA LOS DATOS NECESARIOS EN LA RUTA PRINCIPAL (NOMBRE, IMAGEN, TIPO).
const getApiInfo = async () => {
   // console.log("entre a getApiInfo");
    try {
        let url = 'https://pokeapi.co/api/v2/pokemon/';
      //  console.log(url);
        let pokemones = [];
        do {
         //   console.log("antes de axios");
            let info = await axios.get(url);
           // console.log("despus de axios");
            let pokemonesApi = info.data;
            
            let auxPokemones = pokemonesApi.results.map(e => {
                return {
                    name: e.name,
                    url: e.url,
                }
            })
           // console.log("tengo los auxiliares");
            pokemones.push(...auxPokemones);
           // console.log("hice el array");
            url = pokemonesApi.next;
            //console.log(`next ${url}`);
        } while (url != null && pokemones.length < 10); //ACA PUEDO LIMITARLOS A LOS QUE QUIERA TRAER
        //console.log(pokemones);
        let pokesWithData = await Promise.all(pokemones.map(async e => {
            let pokemon = await axios.get(e.url);
            return {
                id: pokemon.data.id,
                name: pokemon.data.name,
                img: pokemon.data.sprites.other.home.front_default,
                types: pokemon.data.types.map(e => {
                    return ({
                        name: e.type.name,
                        img: `https://typedex.app/images/ui/types/dark/${e.type.name}.svg`,
                    })
                }),
                hp: pokemon.data.stats[0].base_stat,
                attack: pokemon.data.stats[1].base_stat,
                defense: pokemon.data.stats[2].base_stat,
                speed: pokemon.data.stats[5].base_stat,
                height: pokemon.data.height,
                weight: pokemon.data.weight,
            }
        }));
        //console.log(pokesWithData);
        return pokesWithData;
    } catch (e) {
        console.log(e);
    };
};

//TRAIGO AL POKEMON ESPECIFICADO POR PARAMS (ID) / O POR QUERY (NAME) DESDE LA API CON TODOS SUS DATOS NECESARIO PARA LA RUTA DE DETALLE.
async function getPokemonDetail(arg) {
    try {
        const apiData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${arg}`);
        const data = await apiData.data;
        const pokemonData = {
            id: data.id,
            name: data.name,
            img: data.sprites.other.home.front_default,
            types: data.types.map(e => {
                return ({
                    name: e.type.name,
                    img: `https://typedex.app/images/ui/types/dark/${e.type.name}.svg`,
                })
            }),
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            height: data.height,
            weight: data.weight,
        };
        return pokemonData;
    } catch (e) {
        console.log(e);
    };
};




//TRAIGO TODOS LOS POKEMONES CREADOS DESDE LA BASE DE DATOS EN LA TABLA POKEMON, Y QUE INCLUYA LA TABLA TYPE CON SU ATRIBUTO NAME.
const getDbInfo = async () => {
    console.log("entre a buscar los poke en la DB");
    return await Pokemon.findAll({
        include: {
            model: Type,
            attributes: [],
            through: {
                attributes: [],
            },
        }
    });
};

//TRAIGO TODOS LOS POKEMONES, TANTO DE LA API COMO DE LA DB.
const getAllPokemon = async () => {
    console.log("estoy en functions en getallpokemon")
    const apiInfo = await getApiInfo();
    console.log("apiInfo ok");
    const dbInfo = await getDbInfo();
    console.log("dbinfo ok");
    const allPokemon = apiInfo.concat(dbInfo);
    return allPokemon;
};

module.exports = {
    getApiInfo,
    getDbInfo,
    getAllPokemon,
    getPokemonDetail
};
