module.exports = (sequelize, DataTypes) => {
  const Area = sequelize.define('Area', {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    flag: DataTypes.STRING,
  }, {});

  Area.associate = (models) => {
    Area.hasMany(models.Partida, { foreignKey: 'areaId' });
  };

  return Area;
};
