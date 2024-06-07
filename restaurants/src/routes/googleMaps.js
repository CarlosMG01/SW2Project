const express = require('express');
const router = express.Router();
const { getDirections } = require('../controllers/googleMaps');

// Ruta para obtener indicaciones
router.get('/', getDirections);

module.exports = router;
