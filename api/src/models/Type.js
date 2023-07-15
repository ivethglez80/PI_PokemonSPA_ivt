const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  const Type = sequelize.define('type', {
    name: {
      type: DataTypes.STRING,
      unique:"true"
    },
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    }
  }, {
    createdAt: false,
    updatedAt: false,
})

return Type
};