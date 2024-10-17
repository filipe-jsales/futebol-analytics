// routes/partidaRoutes.js
const express = require('express');
const PartidaController = require('../controllers/partidaController');

const router = express.Router();

router.get('/partidas', PartidaController.getAll);
router.post('/partidas', PartidaController.create);

module.exports = router;
