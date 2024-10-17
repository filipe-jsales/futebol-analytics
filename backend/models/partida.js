// models/partida.js
module.exports = (sequelize, DataTypes) => {
  const Partida = sequelize.define('Partida', {
    matchId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    utcDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: DataTypes.STRING,
    matchday: DataTypes.INTEGER,
    stage: DataTypes.STRING,
    group: DataTypes.STRING,
    lastUpdated: DataTypes.DATE,
  }, {});

  Partida.associate = (models) => {
    Partida.belongsTo(models.Area, { foreignKey: 'areaId', as: 'area' });
    Partida.belongsTo(models.Competicao, { foreignKey: 'competitionId', as: 'competition' });
    Partida.belongsTo(models.Temporada, { foreignKey: 'seasonId', as: 'season' });
    Partida.belongsTo(models.Time, { foreignKey: 'homeTeamId', as: 'homeTeam' });
    Partida.belongsTo(models.Time, { foreignKey: 'awayTeamId', as: 'awayTeam' });
    Partida.hasOne(models.Placar, { foreignKey: 'partidaId', as: 'score' });
    Partida.hasMany(models.Arbitro, { foreignKey: 'partidaId', as: 'referees' });
  };

  return Partida;
};
