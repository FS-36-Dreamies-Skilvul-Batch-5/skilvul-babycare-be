'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Vaccines",
    [
      { 
        name: "Hepatitis B 1",
        grant_date_guide: "Saat Lahir",
        information: "Dummy Information"
      },
      { 
        name: "BCG",
        grant_date_guide: "Saat Lahir",
        information: "Dummy Information"
      },
      { 
        name: "Polio 0",
        grant_date_guide: "Saat Lahir",
        information: "Dummy Information"
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Vaccines", null, {});
  }
};
