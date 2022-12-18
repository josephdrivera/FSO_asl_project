'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.changeColumn('Products', 'price', {
      type: Sequelize.FLOAT,
      defaultValue: 0.00,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {


    await queryInterface.changeColumn('Products', 'price', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false,
    });
  },
};