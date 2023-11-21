'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article_Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article_Categories.hasMany(models.Article, { 
        foreignKey: 'category_id'
      });
    }
  }
  Article_Categories.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Article_Categories',
  });
  return Article_Categories;
};