'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Articles",
    [
      { 
        category_id: 1,
        title: "5 Kebiasaan Bayi Baru Lahir yang Harus Diketahui Oleh Ibunda",
        slug: "",
        author: "admin",
        img_url: "",
        content: "Testing 1",
        posted_on: "2023-11-21"
      },
      { 
        category_id: 1,
        title: "Cara Merawat Bayi yang Baik dan Benar",
        slug: "",
        author: "admin",
        img_url: "",
        content: "Testing 2",
        posted_on: "2023-10-10"
      },
      { 
        category_id: 2,
        title: "Stimulasi yang Tepat agar Bayi Cepat Duduk dan Merangkak",
        slug: "",
        author: "admin",
        img_url: "",
        content: "Testing 3",
        posted_on: "2023-10-22"
      },
      { 
        category_id: 2,
        title: "5 Ide Stimulasi Sensori Latih Kemandirian",
        slug: "",
        author: "admin",
        img_url: "",
        content: "Testing 4",
        posted_on: "2023-10-26"
      },
      { 
        category_id: 3,
        title: "Anak Susah Makan? Ini Tips Mengatasinya",
        slug: "",
        author: "admin",
        img_url: "",
        content: "Testing 5",
        posted_on: "2023-10-30"
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Articles", null, {});
  }
};
