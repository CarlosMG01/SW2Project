const axios = require('axios');
const xmljs = require('xml-js');
const { json2xml } = require('xml-js');
const Restaurant = require('../models/restaurant');

const convertToXML = (obj) => {
    const json = JSON.stringify(obj);
    return json2xml(json, { compact: true, spaces: 4 });
  };
// Función para obtener las condiciones climáticas
const getWeather = async (req, res, next) => {
  try {
    const { business_id } = req.query;
    const restaurant = await Restaurant.findOne({ business_id });
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurante no encontrado' });
    }
    const { latitude, longitude } = restaurant;
    const apiKey = '9fcec46be2a4c6336aba5100f16dc48f';
    let url;
    
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    const response = await axios.get(url);

    if (req.headers.accept === 'application/xml' || req.headers.accept === '*/*') {
        res.set('Content-Type', 'application/xml');
        res.send(convertToXML({ response: response.data}));
      } else {
        res.json(response.data);
      }
  } catch (error) {
    console.error('Error retrieving weather data:', error);
    res.status(500).json({ message: 'Error retrieving weather data', fallback: { temperature: 'N/A', condition: 'N/A' } });
  }
};



module.exports = {
  getWeather
};
