'use strict';

const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
    [
      { 
        name: "Admin Utama",
        username: "admin",
        email: "adminbabycare@gmail.com",
        password: bcrypt.hashSync("admin", 10),
        img_url: "",
        role: "admin"
      },
      { 
        name: "John Doe",
        username: "johndoe",
        email: "johndoe@gmail.com",
        password: bcrypt.hashSync("1234", 10),
        img_url: "",
        role: "user"
      },
      { 
        name: "Jane Smith",
        username: "janesmith",
        email: "janesmith@gmail.com",
        password: bcrypt.hashSync("5678", 10),
        img_url: "",
        role: "user"
      },
      { 
        name: "Bob Marley",
        username: "bobmarley",
        email: "bobmarley@gmail.com",
        password: bcrypt.hashSync("9101112", 10),
        img_url: "",
        role: "user"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
