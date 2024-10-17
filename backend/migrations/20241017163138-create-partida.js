'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Partidas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      homeTeamId: {
        type: Sequelize.INTEGER
      },
      awayTeamId: {
        type: Sequelize.INTEGER
      },
      scoreHome: {
        type: Sequelize.INTEGER
      },
      scoreAway: {
        type: Sequelize.INTEGER
      },
      stadium: {
        type: Sequelize.STRING
      },
      championship: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Partidas');
  }
};