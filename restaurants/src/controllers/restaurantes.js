const Restaurant = require('../models/restaurant');
const crypto = require('crypto');

const generateBusinessId = async () => {
    let businessId;
    let exists = true;
  
    while (exists) {
        businessId = crypto.randomBytes(16).toString('base64').replace(/[+/=]/g, '').substring(0, 22);
        exists = await Restaurant.exists({ business_id: businessId });
    }
  
    return businessId;
  };

const getRestaurantes = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const total = await Restaurant.countDocuments();

    if (skip >= total) {
      return res.status(400).json({
        message: 'Página fuera del rango',
        total,
        page,
        limit
      });
    }

    const data = await Restaurant.find()
      .select('business_id name stars review_count -_id')
      .skip(skip)
      .limit(limit);

    res.json({
      total,
      page,
      limit,
      data
    });
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).json({ message: error.message });
  }
};

const getRestaurantesInArea = async (req, res, next) => {
  try {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const total = await Restaurant.countDocuments();

    if (skip >= total) {
      return res.status(400).json({
        message: 'Página fuera del rango',
        total,
        page,
        limit
      });
    }
    

    const { lat, lon, area = 1 } = req.query;
    const latitude = parseFloat(lat);
    const longitude = parseFloat(lon);
    const distance = parseFloat(area);

    if (!latitude || !longitude) {
      return res.status(400).json({ message: 'Latitud y longitud son requeridos' });
    }

    const latDelta = distance / 111;
    const lonDelta = distance / (111 * Math.cos(latitude * Math.PI / 180));

    const minLat = latitude - latDelta;
    const maxLat = latitude + latDelta;
    const minLon = longitude - lonDelta;
    const maxLon = longitude + lonDelta;

    const data = await Restaurant.find({
      latitude: { $gte: minLat, $lte: maxLat },
      longitude: { $gte: minLon, $lte: maxLon }
    }).sort({ stars: -1, review_count: -1 })
    .select('business_id name stars review_count -_id')
    .skip(skip)
    .limit(limit);

    res.json(data);
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).json({ message: error.message });
  }
};

const createRestaurante = async (req, res, next) => {
    try {
      const {
        name,
        address,
        city,
        latitude,
        longitude,
        stars,
        review_count,
        attributes,
        categories,
        hours
      } = req.body;

      
  
      const business_id = await generateBusinessId(); // Genera un ID único
  
      const restaurant = new Restaurant({
        business_id,
        name,
        address,
        city,
        latitude,
        longitude,
        stars,
        review_count,
        attributes,
        categories,
        hours
      });
  
      await restaurant.save();
      res.status(201).json(restaurant);
    } catch (error) {
      console.error('Error creating restaurant:', error);
      res.status(500).json({ message: error.message });
    }
  };


  const getRestauranteById = async (req, res, next) => {
    try {
      const restaurant = await Restaurant.findOne({ business_id: req.params.id });
      if (!restaurant) {
        return res.status(404).json({ message: 'Restaurante no encontrado' });
      }
      res.json(restaurant);
    } catch (error) {
      console.error('Error retrieving restaurant:', error);
      res.status(500).json({ message: error.message });
    }
  };
  

  const updateRestauranteById = async (req, res, next) => {
    try {
      const restaurant = await Restaurant.findOneAndUpdate({ business_id: req.params.id }, req.body, { new: true });
      if (!restaurant) {
        return res.status(404).json({ message: 'Restaurante no encontrado' });
      }
      res.json(restaurant);
    } catch (error) {
      console.error('Error updating restaurant:', error);
      res.status(500).json({ message: error.message });
    }
  };
  

  const deleteRestauranteById = async (req, res, next) => {
    try {
      const restaurant = await Restaurant.findOneAndDelete({ business_id: req.params.id });
      if (!restaurant) {
        return res.status(404).json({ message: 'Restaurante no encontrado' });
      }
      res.status(204).send({ message: 'Restaurante eliminado con éxito'});
    } catch (error) {
      console.error('Error deleting restaurant:', error);
      res.status(500).json({ message: error.message });
    }
  };
  

module.exports = {
  getRestaurantes,
  createRestaurante,
  getRestauranteById,
  updateRestauranteById,
  deleteRestauranteById,
  getRestaurantesInArea
};
