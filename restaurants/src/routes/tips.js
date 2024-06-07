const express = require('express');
const router = express.Router();
const {
  getTipsByBusinessId,
  createTip,
  getTipById,
  updateTipById,
  deleteTipById
} = require('../controllers/tips');

// Ruta para obtener tips por business_id con un límite
router.get('/business/:business_id', getTipsByBusinessId);

// Ruta para crear un nuevo tip
router.post('/', createTip);

// Ruta para obtener un tip por id
router.get('/:id', getTipById);

// Ruta para actualizar un tip por id
router.put('/:id', updateTipById);

// Ruta para eliminar un tip por id
router.delete('/:id', deleteTipById);

module.exports = router;
