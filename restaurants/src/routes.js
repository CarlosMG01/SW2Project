const express = require('express');
const Restaurant = require('./models');
const router = express.Router();

// Obtener todos los registros con paginación
router.get('/restaurants', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Página actual
    const limit = parseInt(req.query.limit) || 10; // Registros por página
    const skip = (page - 1) * limit;

    const data = await Restaurant.find().skip(skip).limit(limit);
    const total = await Restaurant.countDocuments();

    res.json({
      total,
      page,
      limit,
      data
    });
  } catch (error) {
    console.error('Error retrieving data:', error); // Mensaje de depuración
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
