const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Type = sequelize.define('type', {
    name: {
      type: DataTypes.STRING
  },
}, {
  createdAt: false,
  updatedAt: false,
})

Type.associate=(models)=>{
  Type.belongsToMany(models.Pokemon, {Thorugh: "pokemons_type"})
}

return Type
};