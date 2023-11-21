'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Babies",
    [
      { 
        user_id: 2,
        name: "Jaden",
        gender: "male",
        birth_date: "2023-05-10"
      },
      { 
        user_id: 3,
        name: "Brenda",
        gender: "female",
        birth_date: "2023-06-15"
      },
      { 
        user_id: 4,
        name: "Galeway",
        gender: "male",
        birth_date: "2023-08-24"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Babies", null, {});
  }
};
