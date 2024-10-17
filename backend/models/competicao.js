// models/competicao.js
module.exports = (sequelize, DataTypes) => {
  const Competicao = sequelize.define('Competicao', {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    type: DataTypes.STRING,
    emblem: DataTypes.STRING,
  }, {});

  Competicao.associate = (models) => {
    Competicao.hasMany(models.Partida, { foreignKey: 'competitionId' });
  };

  return Competicao;
};
