const TimeService = require('../services/timeService');

const TimeController = {
  async create(req, res) {
    try {
      const newTime = await TimeService.createTime(req.body);
      res.status(201).json(newTime);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar o time' });
    }
  },
  async getAll(req, res) {
    try {
      const times = await TimeService.getAll();
      res.status(200).json(times);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar os times' });
    }
    },

};

module.exports = TimeController;
