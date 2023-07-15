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
  const {name, hp, attack, defense, speed, height, weight, img, type} = req.body;
  try {
      if(name) {
          console.log("entre al if");
          const allPoke = await getAllPokemon();
          console.log("traje allpoke");
          const isPoke = allPoke.find(e => e.name === name.toLowerCase());
          if (!isPoke) {
              const pokemon = await Pokemon.create({
                      name, hp, attack, defense, speed, height, weight, img 
              });
              console.log(typeof(type));
              const typeDb = await Type.findAll({
                  where: { name: type.toLowerCase()},
                });              
              console.log(typeof(typeDb))
              if (typeDb.length>0){
                await pokemon.addType(typeDb)
              }else{
                console.log("kind of pokemon doesn't exists")
              }
    //   await pokemon.addType(typeDb);
      return res.status(201).send(pokemon);
    }
    return res.status(404).send('Pokemon name already exists');
  }
  if (!name) return res.status(404).send('Pokemon name is obligatory');
} catch (e) {
  res.status(500).send("Could not create the pokemon");
}
});
module.exports = router;
