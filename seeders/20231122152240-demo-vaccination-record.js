'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Vaccination_Records",
    [
      { 
        baby_id: 1,
        vaccine_id: 1,
        grant_date: "2023-05-10"
      },
      { 
        baby_id: 1,
        vaccine_id: 2,
        grant_date: "2023-05-10"
      },
      { 
        baby_id: 1,
        vaccine_id: 3,
        grant_date: "2023-05-10"
      },
      { 
        baby_id: 2,
        vaccine_id: 1,
        grant_date: "2023-06-15"
      },
      { 
        baby_id: 2,
        vaccine_id: 2,
        grant_date: "2023-06-15"
      },
      { 
        baby_id: 3,
        vaccine_id: 1,
        grant_date: "2023-08-24"
      },
      { 
        baby_id: 3,
        vaccine_id: 2,
        grant_date: "2023-08-24"
      },
      { 
        baby_id: 3,
        vaccine_id: 3,
        grant_date: "2023-08-24"
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Vaccination_Records", null, {});
  }
};