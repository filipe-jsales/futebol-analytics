const express = require('express');
const TimeController = require('../controllers/timeController');

const router = express.Router();

router.get('/times', TimeController.getAll);
router.post('/times', TimeController.create);

module.exports = router;
