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
})






router.post('/', async (req, res, next) => {
  try {
    const { name, hp, attack, defense, speed, height, weight, img, type } = req.body;
    const newPoke = await Pokemon.create({
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      img,
    });

    let dbtype = await Type.findOne({
      where: { name: type },
    });
    if (dbtype) {
      await newPoke.addType(dbtype);
    }

    console.log(type);
    res.status(200).send(newPoke);
    return newPoke;
  } catch (error) {
    next(error);
  }
});

module.exports = router;
