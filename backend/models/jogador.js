// models/jogador.js
module.exports = (sequelize, DataTypes) => {
  const Jogador = sequelize.define('Jogadors', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: DataTypes.STRING,
    age: DataTypes.INTEGER,
    timeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Times',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  }, {});

  Jogador.associate = (models) => {
    // Associações
    Jogador.belongsTo(models.Time, { foreignKey: 'timeId' });
  };

  return Jogador;
};
