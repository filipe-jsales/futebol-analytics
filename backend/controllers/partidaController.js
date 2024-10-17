const PartidaService = require('../services/partidaService');

const PartidaController = {
  async create(req, res) {
    try {
      const newPartida = await PartidaService.createPartida(req.body);
      res.status(201).json(newPartida);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar a partida' });
    }
  },
  async getAll(req, res) {
    try {
      const partidas = await PartidaService.getAll();
      res.status(200).json(partidas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar as partidas' });
    }
  }
};

module.exports = PartidaController;
