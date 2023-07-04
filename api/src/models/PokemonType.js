const sequelize = require("sequelize");
const {DataTypes} = require ("sequelize");

module.exports = (sequelize)=>{
    sequelize.define('pokemonType',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        Nombre:{
            type: DataTypes.STRING(20),
            allowNull: false
        }
    },{
        createdAt: false,
        updatedAt: false    
      })
}