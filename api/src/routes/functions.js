const axios = require ('axios');
const {pokemon, type} = require ('../db');
let URL = "https://pokeapi.co/api/v2/pokemon/"
let IMG2 = "https://typedex.app/images/ui/types/dark/"
let IMG1 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg";


/*obtener datos de todos los pokemones de la api para darselos a PokeRuta*/
const dataApi = async() =>{
    try {
        const pokes = [];
        while (pokes.length<40){
            const info = await axios.get(URL);
            const pokeApi = info.data;
            const pokeTemp = pokeApi.results
                             .map(({name, url})=>({name, url}));
            pokes.push(...pokeTemp);
            URL = pokeApi.next;
        }

        const promises = pokes.map(async({URL})=>{
            const response = await axios.get(URL);
            const poke = response.data;
            return {
                id : poke.id,
                name : poke.name,
                img : poke.sprites.other['home']['front_default'],
                types: poke.types.map(({type})=>({
                    name: type.name,
                    img: `IMG2${type.name}.svg`,
                })),
                hp: poke.stats[0].base_stat,
                attack: poke.stat[1].base_stat,
                defense: poke.stats[2].base_stat,
                speed: poke.stats[5].base_stat,
                height: poke.height,
                weight: poke.weight
            }
        });
        const pokeComplete = await Promise.all(promises);
        return pokeComplete;
    } catch (error) {
        res.send(500).send(error);
    };
};

/*obtener un solo pokemon con toda su info*/
async function dataUnPoke(arg){
    try {
        const {poke} = await axios.get('URL${arg}');
        const pokeData = {
                id : poke.id,
                name : poke.name,
                img : poke.sprites.other['home']['front_default'],
                types: poke.types.map(e=>({
                    name: e.type.name,
                    img: `IMG2${e.type.name}.svg`,
                })),
                hp: poke.stats[0].base_stat,
                attack: poke.stat[1].base_stat,
                defense: poke.stats[2].base_stat,
                speed: poke.stats[5].base_stat,
                height: poke.height,
                weight: poke.weight
        };
        return pokeData;
    } catch (error) {
        throw error;
    };
};


/* obtener info de DB*/
const pokeDB = async()=>{
    return await pokemon.findAll({
        include: {
            model : type,
            attributes: ['name'],
            through:{
                atributes:[],
            },
        }
    });
};

const getThemAll = async()=>{
    const apiPokes = await dataApi ();
    const dbPokes = await pokeDB ();
    const allpokes = apiPokes.concat(dbPokes);
    return allpokes;
}

module.exports={
    dataApi,
    dataUnPoke,
    pokeDB,
    getThemAll
}
