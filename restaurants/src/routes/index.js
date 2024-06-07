const express = require('express');
const router = express.Router();

const restaurantesRoutes = require('./restaurantes');
const comentariosRoutes = require('./comentarios');
const photosRoutes = require('./photos');
const tipsRoutes = require('./tips');
const usersRoutes = require('./users');
const externalRoutes = require('./external');
const googleMapsRoutes = require('./googleMaps');

router.use('/restaurantes', restaurantesRoutes);
router.use('/', comentariosRoutes);
router.use('/photos', photosRoutes);
router.use('/tips', tipsRoutes);
router.use('/users', usersRoutes);
router.use('/weather', externalRoutes);
router.use('/go', googleMapsRoutes);

module.exports = router;

