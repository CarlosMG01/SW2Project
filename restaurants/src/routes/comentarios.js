const express = require('express');
const router = express.Router();
const {
  getComentariosByRestauranteId,
  createComentario,
  getComentarioById,
  updateComentarioById,
  deleteComentarioById
} = require('../controllers/comentarios');

router.get('/comentarios/:id_restaurante', getComentariosByRestauranteId);
router.post('/comentario/:id_restaurante', createComentario);
router.get('/comentario/:id_comentario', getComentarioById);
router.put('/comentario/:id_comentario', updateComentarioById);
router.delete('/comentario/:id_comentario', deleteComentarioById);

module.exports = router;
