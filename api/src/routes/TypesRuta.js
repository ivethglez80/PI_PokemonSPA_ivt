/* ruta para traer los pokemon por tipo*/
const axios = require ('axios');
// const fetch = require ('node-fetch');
const express = require ('express');
const {Type} = require ('../db');

const router = express.Router();

router.get ('/',async(req,res)=>{
    try {
        // const apiTypeRes = await fetch ('https://pokeapi.co/api/v2/type');
        // const apiTypeData = await apiTypeRes.json(); 
        const apiType = await axios.get('https://pokeapi.co/api/v2/type');
        const apiTypeData = apiType.data;
        const types = apiTypeData.results.map(poke=>poke.name);
        const promises = types.map((type)=>{
            Type.findOrCreate({
                where:{
                    name:type
                }
            })
        })
        await Promise.all(promises); /*todas en una*/
        const alltypes = await Type.findAll();
        return res.status(200).send(alltypes);
    } catch (error) {
        return res.send(401).send(error);
    }
});

module.exports = router;





// const fetch = require('node-fetch');
// const express = require('express');
// const { Type } = require('../db');

// const router = express.Router();

// router.get('/', (req, res) => {
//   fetch('https://pokeapi.co/api/v2/type')
//     .then((apiTypeResponse) => apiTypeResponse.json())
//     .then((apiTypeData) => {
//       const types = apiTypeData.results.map((poke) => poke.name);

//       const promises = types.map((type) =>
//         Type.findOrCreate({
//           where: {
//             name: type,
//           },
//         })
//       );

//       return Promise.all(promises);
//     })
//     .then(() => Type.findAll())
//     .then((allTypes) => res.status(200).send(allTypes))
//     .catch((error) => res.status(500).send(error));
// });

// module.exports = router;
