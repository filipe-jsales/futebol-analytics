'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Placars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      winner: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      fullTimeHome: {
        type: Sequelize.INTEGER
      },
      fullTimeAway: {
        type: Sequelize.INTEGER
      },
      halfTimeHome: {
        type: Sequelize.INTEGER
      },
      halfTimeAway: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Placars');
  }
};