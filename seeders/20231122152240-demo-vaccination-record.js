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
        grant_date: "2023-05-10",
        vaccine_brand: "Engerix-B",
        vaccine_location: "Surabaya",
        vaccine_batch_number: "VAX1234ABC"
      },
      { 
        baby_id: 1,
        vaccine_id: 2,
        grant_date: "2023-05-10",
        vaccine_brand: "IPOL",
        vaccine_location: "Surabaya",
        vaccine_batch_number: "BCT5678XYZ"
      },
      { 
        baby_id: 1,
        vaccine_id: 3,
        grant_date: "2023-05-10",
        vaccine_brand: "JohnsonJohn",
        vaccine_location: "Surabaya",
        vaccine_batch_number: "JKL7890MNO"
      },
      { 
        baby_id: 2,
        vaccine_id: 1,
        grant_date: "2023-06-15",
        vaccine_brand: "Engerix-B",
        vaccine_location: "Jakarta",
        vaccine_batch_number: "KLM9012PQR"
      },
      { 
        baby_id: 2,
        vaccine_id: 2,
        grant_date: "2023-06-15",
        vaccine_brand: "IPOL",
        vaccine_location: "Jakarta",
        vaccine_batch_number: "UVW3456DEF"
      },
      { 
        baby_id: 3,
        vaccine_id: 1,
        grant_date: "2023-08-24",
        vaccine_brand: "Engerix-B",
        vaccine_location: "Pontianak",
        vaccine_batch_number: "PQR5678XYZ"
      },
      { 
        baby_id: 3,
        vaccine_id: 2,
        grant_date: "2023-08-24",
        vaccine_brand: "IPOL",
        vaccine_location: "Pontianak",
        vaccine_batch_number: "XYZ1234ABC"
      },
      { 
        baby_id: 3,
        vaccine_id: 3,
        grant_date: "2023-08-24",
        vaccine_brand: "Astra",
        vaccine_location: "Pontianak",
        vaccine_batch_number: "ABC2345MNO"
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Vaccination_Records", null, {});
  }
};