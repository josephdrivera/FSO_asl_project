"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // Add the new fields to the Products table
    await queryInterface.addColumn("Products", "slug", {
      type: Sequelize.STRING,
    }),
      queryInterface.addColumn("Products", "description", {
        type: Sequelize.TEXT("long"),
      }),
      queryInterface.addColumn("Products", "is_published", {
        type: Sequelize.BOOLEAN,
      });
  },

  async down(queryInterface, Sequelize) {
    // Remove the new fields from the Products table
    await queryInterface.removeColumn("Products", "slug"),
      queryInterface.removeColumn("Products", "description"),
      queryInterface.removeColumn("Products", "is_published");
  },
};