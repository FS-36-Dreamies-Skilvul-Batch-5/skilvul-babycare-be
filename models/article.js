'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.belongsTo(models.Article_Category, { 
        foreignKey: 'category_id'
      });
    }
  }
  Article.init({
    category_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    author: DataTypes.STRING,
    img_url: DataTypes.STRING,
    content: DataTypes.TEXT,
    posted_on: DataTypes.DATEONLY
  }, {
    sequelize,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    modelName: 'Article',
  });
  return Article;
};