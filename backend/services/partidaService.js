// services/partidaService.js
const { Partida, Area, Competicao, Temporada, Placar, Arbitro, Time } = require('../models');

const PartidaService = {
  async createPartida(partidaData) {
    const transaction = await Partida.sequelize.transaction();
    try {
      const area = await Area.findOrCreate({ where: { id: partidaData.area.id }, defaults: partidaData.area });
      const competicao = await Competicao.findOrCreate({ where: { id: partidaData.competition.id }, defaults: partidaData.competition });
      const temporada = await Temporada.findOrCreate({ where: { id: partidaData.season.id }, defaults: partidaData.season });
      
      const homeTeam = await Time.findOrCreate({ where: { id: partidaData.homeTeam.id }, defaults: partidaData.homeTeam });
      const awayTeam = await Time.findOrCreate({ where: { id: partidaData.awayTeam.id }, defaults: partidaData.awayTeam });

      const partida = await Partida.create({
        matchId: partidaData.id,
        utcDate: partidaData.utcDate,
        status: partidaData.status,
        matchday: partidaData.matchday,
        stage: partidaData.stage,
        group: partidaData.group,
        lastUpdated: partidaData.lastUpdated,
        areaId: area[0].id,
        competitionId: competicao[0].id,
        seasonId: temporada[0].id,
        homeTeamId: homeTeam[0].id,
        awayTeamId: awayTeam[0].id,
      }, { transaction });

      const placar = await Placar.create({
        winner: partidaData.score.winner,
        duration: partidaData.score.duration,
        fullTimeHome: partidaData.score.fullTime.home,
        fullTimeAway: partidaData.score.fullTime.away,
        halfTimeHome: partidaData.score.halfTime.home,
        halfTimeAway: partidaData.score.halfTime.away,
        partidaId: partida.id,
      }, { transaction });

      for (const refereeData of partidaData.referees) {
        await Arbitro.create({ ...refereeData, partidaId: partida.id }, { transaction });
      }

      await transaction.commit();
      return partida;
    } catch (error) {
      await transaction.rollback();
      throw new Error('Erro ao criar partida: ' + error.message);
    }
  },
    async getAll() {
        return Partida.findAll({
        include: [
            { model: Area, as: 'area' },
            { model: Competicao, as: 'competition' },
            { model: Temporada, as: 'season' },
            { model: Time, as: 'homeTeam' },
            { model: Time, as: 'awayTeam' },
            { model: Placar, as: 'score' },
            { model: Arbitro, as: 'referees' },
        ],
        });
    },
};

module.exports = PartidaService;
