const express = require('express');
const {Pokemon, Type} = require('../db');
const { getPokemonDetail, getAllPokemon } = require('./functions');

const router = express.Router();

router.get('/', async (req, res) => {
    const {name} = req.query;
    const allPokesName = await getAllPokemon();
    try {
        if (name) {
            let poke = allPokesName.filter(e => e.name.toLowerCase() === name.toLowerCase());
            poke.length ? res.status(200).send(poke) : res.status(404).send('Pokemon not found'); 
        } else {
            let pokemons = await getAllPokemon();
            return res.status(200).send(pokemons);
        }
    } catch (e) {
        console.log(e);
    }
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const allPokesId = await getAllPokemon(); 
    try {
        if(id) {
            let pokemonById = allPokesId.filter(e => e.id == id);
            pokemonById.length ? res.status(200).send(pokemonById) : res.status(404).send('Pokemon not found')
        } 
    } catch (e) {
        console.log(e);
    }
});


router.post('/', async (req, res) => {
    console.log ("entre al post");
    const {name, hp, attack, defense, speed, height, weight, img, types} = req.body;
    console.log(`obtuve el nombre ${name}`)
    try {
        if(name) {
            console.log("entre al if");
            const allPoke = await getAllPokemon();
            console.log("traje allpoke");
            const isPoke = allPoke.find(e => e.name === name.toLowerCase());
            if (!isPoke) {
                const pokemon = await Pokemon.create({
                        name,
                        hp,
                        attack,
                        defense,
                        speed,
                        height,
                        weight,
                        img 
                });
                console.log(pokemon);
                const typeDb = await Type.findAll({
                    where: {
                        name: types,
                    }
                });
                pokemon.addType(typeDb);
                return res.status(201).send(pokemon);
            }
            return res.status(404).send('Pokemon name already exist')
        } 
        if(!name) return res.status(404).send('Pokemon name is obligatory');
    } catch (e) {
        res.status(500).send("no se pudo crear el pokemon");
    }
});

module.exports = router;
