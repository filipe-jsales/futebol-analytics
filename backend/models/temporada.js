module.exports = (sequelize, DataTypes) => {
  const Temporada = sequelize.define('Temporada', {
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    currentMatchday: DataTypes.INTEGER,
    winner: DataTypes.STRING,
  }, {});

  Temporada.associate = (models) => {
    Temporada.hasMany(models.Partida, { foreignKey: 'seasonId' });
  };

  return Temporada;
};
