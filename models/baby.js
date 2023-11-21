'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Baby extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Baby.belongsTo(models.User, { 
        foreignKey: 'user_id'
      });
    }
  }
  Baby.init({
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    gender: DataTypes.ENUM('male', 'female'),
    birth_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Baby',
  });
  return Baby;
};