'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Estatisticas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jogadorId: {
        type: Sequelize.INTEGER
      },
      partidaId: {
        type: Sequelize.INTEGER
      },
      gols: {
        type: Sequelize.INTEGER
      },
      assistencias: {
        type: Sequelize.INTEGER
      },
      cartoesAmarelos: {
        type: Sequelize.INTEGER
      },
      cartoesVermelhos: {
        type: Sequelize.INTEGER
      },
      lesao: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Estatisticas');
  }
};