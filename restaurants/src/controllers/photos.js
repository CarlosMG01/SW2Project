const { Photo } = require('../models');

// Obtener fotos por business_id con un límite
const getPhotosByBusinessId = async (req, res, next) => {
  try {
    const { business_id } = req.params;
    const limit = parseInt(req.query.limit) || 10;

    const photos = await Photo.find({ business_id })
      .limit(limit);

    res.json(photos);
  } catch (error) {
    console.error('Error retrieving photos:', error);
    res.status(500).json({ message: error.message });
  }
};

// Eliminar una foto por photo_id
const deletePhotoById = async (req, res, next) => {
  try {
    const { photo_id } = req.params;

    const photo = await Photo.findOneAndDelete({ photo_id });
    if (!photo) {
      return res.status(404).json({ message: 'Foto no encontrada' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting photo:', error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPhotosByBusinessId,
  deletePhotoById
};
