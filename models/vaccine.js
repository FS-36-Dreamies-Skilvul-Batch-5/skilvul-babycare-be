'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vaccine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vaccine.hasMany(models.Vaccination_Record, {
        foreignKey: 'vaccine_id'
      });
    }
  }
  Vaccine.init({
    name: DataTypes.STRING,
    grant_date_guide: DataTypes.STRING,
    information: DataTypes.TEXT
  }, {
    sequelize,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    modelName: 'Vaccine',
  });
  return Vaccine;
};