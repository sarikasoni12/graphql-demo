"use strict";

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert("product", [
      {
        id: 1,
        name: "Product 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Product 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {updateOnDuplicate: ["name"]});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete("product", null, {});
  },
};
