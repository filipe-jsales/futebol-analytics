'use-strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Times', 'shortName', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Times', 'tla', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Times', 'address', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Times', 'clubColors', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Times', 'crest', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Times', 'founded', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('Times', 'venue', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Times', 'website', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Times', 'lastUpdated', {
      type: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Times', 'shortName');
    await queryInterface.removeColumn('Times', 'tla');
    await queryInterface.removeColumn('Times', 'address');
    await queryInterface.removeColumn('Times', 'clubColors');
    await queryInterface.removeColumn('Times', 'crest');
    await queryInterface.removeColumn('Times', 'founded');
    await queryInterface.removeColumn('Times', 'venue');
    await queryInterface.removeColumn('Times', 'website');
    await queryInterface.removeColumn('Times', 'lastUpdated');
  }
};
