// controllers/googleMaps.js
const axios = require('axios');
const { json2xml } = require('xml-js');
const Restaurant = require('../models/restaurant');


const convertToXML = (obj) => {
    const json = JSON.stringify(obj);
    return json2xml(json, { compact: true, spaces: 4 });
  };

// Función para obtener indicaciones de Google Maps
const getDirections = async (req, res, next) => {
  try {
    const { business_id, originLat, originLon } = req.query;
    const apiKey = 'AIzaSyC7Jtdz8-dXxwUptmvkMedlLUONFP-6XLI';

    if (!business_id || !originLat || !originLon) {
      return res.status(400).json({ message: 'Debe proporcionar business_id, latitud y longitud de origen' });
    }

    // Obtener la localización del restaurante desde la base de datos
    const restaurant = await Restaurant.findOne({ business_id });

    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurante no encontrado' });
    }

    const { latitude, longitude } = restaurant;

    // Hacer la solicitud a la API de Google Maps
    const response = await axios.get(`https://maps.googleapis.com/maps/api/directions/json`, {
      params: {
        origin: `${originLat},${originLon}`,
        destination: `${latitude},${longitude}`,
        mode: 'driving',
        key: apiKey
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error retrieving directions:', error);
    res.status(500).json({ message: 'Error retrieving directions' });
  }
};

module.exports = {
  getDirections
};
