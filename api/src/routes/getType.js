const axios = require ('axios');
const {Type} = require ('../db')

const getType = async (req,res)=>{
    
    try{
        const {data} = await axios ('https://pokeapi.co/api/v2/type');
        const {results} = data;
        const typeList = results.map(type=>{
            return {name: type.name};
        });
        const types = await Type.bulkCreate(typeList);
        console.log(types);
        return res.status(200).json(types)
    }catch (error){
        return new Error({error: error.message})
    }
};

module.exports = getType;