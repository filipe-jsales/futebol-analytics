module.exports = (sequelize, DataTypes) => {
  const Estatistica = sequelize.define('Estatistica', {
    jogadorId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Jogador',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    partidaId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Partida',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    gols: DataTypes.INTEGER,
    assistencias: DataTypes.INTEGER,
    cartoesAmarelos: DataTypes.INTEGER,
    cartoesVermelhos: DataTypes.INTEGER,
    lesao: DataTypes.BOOLEAN,
  }, {});

  Estatistica.associate = (models) => {

  };

  return Estatistica;
};
