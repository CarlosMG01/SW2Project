const express = require('express');
const router = express.Router();
const { getWeather } = require('../controllers/external');

// Ruta para obtener el clima (JSON)
router.get('/', getWeather);

module.exports = router;
