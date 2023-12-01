'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vaccination_Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vaccination_Record.belongsTo(models.Baby, {
        foreignKey: 'baby_id'
      });
      Vaccination_Record.belongsTo(models.Vaccine, {
        foreignKey: 'vaccine_id'
      })
    }
  }
  Vaccination_Record.init({
    baby_id: DataTypes.INTEGER,
    vaccine_id: DataTypes.INTEGER,
    grant_date: DataTypes.DATEONLY,
    vaccine_brand: DataTypes.STRING,
    vaccine_location: DataTypes.STRING,
    vaccine_batch_number: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    modelName: 'Vaccination_Record',
  });
  return Vaccination_Record;
};