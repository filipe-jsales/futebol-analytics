module.exports = (sequelize, DataTypes) => {
  const Arbitro = sequelize.define('Arbitro', {
    name: DataTypes.STRING,
    nationality: DataTypes.STRING,
    type: DataTypes.STRING,
  }, {});

  Arbitro.associate = (models) => {
    Arbitro.belongsTo(models.Partida, { foreignKey: 'partidaId' });
  };

  return Arbitro;
};
