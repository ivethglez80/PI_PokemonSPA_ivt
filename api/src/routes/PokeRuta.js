
const express = require ('express');
const {pokemon, type} = require ('../db');
const {dataApi, getThemAll} = require ('./functions')

const router = express.Router();

//responder a la solicitud nombre por query
router.get("/", async(req,res)=>{
    const {name} = req.query;
    const AllPokemon = await getThemAll();
    try {
        if (name){
            let poke = AllPokemon
                       .filter(e=>e.name.toLowerCase()===name.toLowerCase());
            poke.length ? res.status(200).send(poke)
                        : res.status(404).send("Pokemon not found");
        }else{
            return res.status(200).send(AllPokemon);
        }
    } catch (error) {
        throw error;
    };
});


//responder solicitud id por params
router.get("/:id", async(req,res)=>{
    const {id} = req.params;
    const AllPokemon = await getThemAll;
    try {
        if (id){
            let idPoke = AllPokemon.filter(e=>e.id===id);
            idPoke.length ? res.status(200).send(idPoke)
                          : res.status(404).send("pokemon not found")
        }
    } catch (error) {
        throw error;
    }
})


//crear un pokemon POST
router.post('/', async(req,res)=>{
    const {name, img, types, hp, attack, defense, speed, height, weight} = req.body;
    try {
        if (!name){
            return res.status(401).send("Pokemon name is mandatory");
        }else{
            const allpoke = await getThemAll();
            const exists = allpoke.find(e=>e.name===name.toLowerCase());
            if (!exists){
                const newPoke = await pokemon.create({
                    name, img, hp, attack, defense, speed, height, weight
                });
                const typeNew = await type.findAll({
                    where:{
                        name:types,
                    }
                });
                newPoke.addType(typeNew);
                return res.status(200).send(newPoke)
            }

        }
    } catch (error) {
        throw error;
    }

})
module.exports = router;