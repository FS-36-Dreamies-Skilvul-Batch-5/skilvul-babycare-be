'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vaccination_Records', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      baby_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Babies',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      vaccine_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Vaccines',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      grant_date: {
        type: Sequelize.DATEONLY
      },
      vaccine_brand: {
        type: Sequelize.STRING
      },
      vaccine_location: {
        type: Sequelize.STRING
      },
      vaccine_batch_number: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Vaccination_Records');
  }
};