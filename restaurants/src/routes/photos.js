const express = require('express');
const router = express.Router();
const {
  getPhotosByBusinessId,
  deletePhotoById
} = require('../controllers/photos');

// Ruta para obtener fotos por business_id con un límite
router.get('/:business_id', getPhotosByBusinessId);

// Ruta para eliminar una foto por photo_id
router.delete('/:photo_id', deletePhotoById);

module.exports = router;
