const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vida: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ataque: {
      type: DataTypes.STRING,
      allowNull: false
    },
    defensa: {
      type: DataTypes.STRING,
      allowNull: false
    },
    velocidad: {
      type: DataTypes.STRING,
    },
    altura: {
      type: DataTypes.INTEGER
    },
    Peso: {
      type: DataTypes.INTEGER
    }
  },{
    createdAt: false,
    updatedAt: false    
  });
};
