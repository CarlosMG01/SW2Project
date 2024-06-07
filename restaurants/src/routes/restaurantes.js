const express = require('express');
const router = express.Router();
const {
  getRestaurantes,
  createRestaurante,
  getRestauranteById,
  updateRestauranteById,
  deleteRestauranteById,
  getRestaurantesInArea
} = require('../controllers/restaurantes');

router.get('/', getRestaurantes);
router.post('/', createRestaurante);
router.get('/area', getRestaurantesInArea);
router.get('/:id', getRestauranteById);
router.put('/:id', updateRestauranteById);
router.delete('/:id', deleteRestauranteById);

module.exports = router;
    