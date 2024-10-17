// models/time.js
module.exports = (sequelize, DataTypes) => {
  const Time = sequelize.define('Time', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortName: DataTypes.STRING,
    tla: DataTypes.STRING, // abreviação do time
    address: DataTypes.STRING,
    clubColors: DataTypes.STRING,
    crest: DataTypes.STRING, // URL do escudo
    founded: DataTypes.INTEGER,
    venue: DataTypes.STRING,
    website: DataTypes.STRING,
    lastUpdated: DataTypes.DATE,
  }, {});

  Time.associate = (models) => {

  };

  return Time;
};
