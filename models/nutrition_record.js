'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nutrition_Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Nutrition_Record.belongsTo(models.Baby, {
        foreignKey: 'baby_id'
      });
    }
  }
  Nutrition_Record.init({
    baby_id: DataTypes.INTEGER,
    weight: DataTypes.FLOAT,
    height: DataTypes.FLOAT,
    head_circumference: DataTypes.FLOAT,
    growth_date: DataTypes.DATEONLY
  }, {
    sequelize,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    modelName: 'Nutrition_Record',
  });
  return Nutrition_Record;
};