const { Time } = require('../models');

const TimeService = {
  async createTime(timeData) {
    try {
      const time = await Time.create({
        name: timeData.name,
        shortName: timeData.shortName,
        tla: timeData.tla,
        address: timeData.address,
        clubColors: timeData.clubColors,
        crest: timeData.crest,
        founded: timeData.founded,
        venue: timeData.venue,
        website: timeData.website,
        lastUpdated: new Date(timeData.lastUpdated),
      });
      return time;
    } catch (error) {
      throw new Error('Erro ao criar time: ' + error.message);
    }
  },
  async getAll() {
    return Time.findAll();
  },
  
};

module.exports = TimeService;
