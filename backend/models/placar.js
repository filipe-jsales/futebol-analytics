module.exports = (sequelize, DataTypes) => {
  const Placar = sequelize.define('Placar', {
    winner: DataTypes.STRING,
    duration: DataTypes.STRING,
    fullTimeHome: DataTypes.INTEGER,
    fullTimeAway: DataTypes.INTEGER,
    halfTimeHome: DataTypes.INTEGER,
    halfTimeAway: DataTypes.INTEGER,
  }, {});

  Placar.associate = (models) => {
    Placar.belongsTo(models.Partida, { foreignKey: 'partidaId' });
  };

  return Placar;
};
