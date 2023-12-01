'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Nutrition_Records",
    [
      { 
        baby_id: 1,
        weight: 2.3,
        height: 47,
        head_circumference: 34.7,
        growth_date: "2023-05-10",
      },
      { 
        baby_id: 2,
        weight: 3.5,
        height: 53.1,
        head_circumference: 36.2,
        growth_date: "2023-06-15",
      },
      { 
        baby_id: 3,
        weight: 2.1,
        height: 51.5,
        head_circumference: 31.6,
        growth_date: "2023-08-24",
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Nutrition_Records", null, {});
  }
};