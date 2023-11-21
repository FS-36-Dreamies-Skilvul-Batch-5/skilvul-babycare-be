'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Article_Categories",
    [
      { name: "Tips" },
      { name: "Stimulasi" },
      { name: "Nutrisi" }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Article_Categories", null, {});
  }
};
