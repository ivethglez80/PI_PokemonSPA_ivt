const axios = require('axios');
const express = require('express');
const { Type } = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
    
  try {
    const apiType = await axios.get('https://pokeapi.co/api/v2/type');
    const apiTypeInfo = apiType.data;
    const types = apiTypeInfo.results.map(e => ({ name: e.name }));

    await Type.bulkCreate(types, { ignoreDuplicates: true });

    const allTypes = await Type.findAll();
    return res.status(200).send(allTypes);
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      error: e.message,
    });
  }
});

module.exports = router;




// const {type} = require ("../db");
// const axios = require ("axios");

// const typesUpdate = async()=>{
//     const types = await Type.findAll()
//     if (types.length===0){
//         const typesApi = (await (axios.get("https://pokeapi.co/api/v2/type"))).data.results;
//         const typesName = typesApi.map((e)=>e.name);
//         await Type.bulkCreate(typesName.map((name)=>({name})));
//         return "types added"
//     }
//     return types;
// }
// module.exports={typesUpdate};

// //****************************

// const {Type} = require("../db");
// const {typesUpdate} = require (../controllers/type);

// const handlerGetType=async(req,res)=>{
//     try {
//         const typesFinally = await typesUpdate();
//         res.status(200).json(typesFinally)
//     } catch (error) {
//         res.status(400).json({error:error.message})
//     }
// }
// module.exports={handlerGetType}