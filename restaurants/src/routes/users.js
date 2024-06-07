const express = require('express');
const router = express.Router();
const { getUserNameById } = require('../controllers/users');

// Ruta para obtener el nombre del usuario por user_id
router.get('/:user_id', getUserNameById);

module.exports = router;
