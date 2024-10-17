module.exports = (sequelize, DataTypes) => {
  const Time = sequelize.define('Time', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortName: DataTypes.STRING,
    tla: DataTypes.STRING,
    address: DataTypes.STRING,
    clubColors: DataTypes.STRING,
    crest: DataTypes.STRING,
    founded: DataTypes.INTEGER,
    venue: DataTypes.STRING,
    website: DataTypes.STRING,
    lastUpdated: DataTypes.DATE,
  }, {});

  Time.associate = (models) => {

  };

  return Time;
};
