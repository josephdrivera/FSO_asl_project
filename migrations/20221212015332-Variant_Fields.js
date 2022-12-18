"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.addColumn("Variants", "slug", {
      type: Sequelize.STRING,
    }),
      queryInterface.addColumn("Variants", "description", {
        type: Sequelize.TEXT("long"),
      }),
      queryInterface.addColumn("Variants", "inventory", {
        type: Sequelize.INTEGER,
      });
  },

  async down(queryInterface, Sequelize) {


    await queryInterface.removeColumn("Variants", "slug"),
      queryInterface.removeColumn("Variants", "description"),
      queryInterface.removeColumn("Variants", "inventory");
  },
};