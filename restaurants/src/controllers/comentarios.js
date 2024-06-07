const { Review } = require('../models');
const { json2xml } = require('xml-js');
const crypto = require('crypto');

// Función para convertir objeto JavaScript a XML
const convertToXML = (obj) => {
  const json = JSON.stringify(obj);
  return json2xml(json, { compact: true, spaces: 4 });
};

const generateUniqueId = async () => {
  let reviewId;
  let exists = true;

  while (exists) {
    reviewId = crypto.randomBytes(16).toString('base64').replace(/[+/=]/g, '').substring(0, 22);
    exists = await Review.exists({ review_id: reviewId });
  }

  return reviewId;
};

const getComentariosByRestauranteId = async (req, res, next) => {
  
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const total = await Review.countDocuments({ business_id: req.params.id_restaurante });
    if (skip >= total) {
      return res.status(400).json({
        message: 'Página fuera del rango',
        total,
        page,
        limit
      });
    }

    const data = await Review.find({ business_id: req.params.id_restaurante }).skip(skip).limit(limit);
    if (req.headers.accept === 'application/xml' || req.headers.accept === '*/*') {
      res.set('Content-Type', 'application/xml');
      res.send(convertToXML({ data }));
    } else {
      res.json(data);
    }
  } catch (error) {
    console.error('Error retrieving reviews:', error);
    res.status(500).json({ message: error.message });
  }
};

const createComentario = async (req, res, next) => {
  try {
    const { user_id, stars, text } = req.body;
    const review = new Review({
      review_id: await generateUniqueId(),
      user_id,
      business_id: req.params.id_restaurante,
      stars,
      useful: 0,
      funny: 0,
      cool: 0,
      text,
      date: new Date()
    });

    await review.save();

    if (req.headers.accept === 'application/xml') {
      res.set('Content-Type', 'application/xml');
      res.status(201).send(convertToXML({ review }));
    } else {
      res.status(201).json(review);
    }
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ message: error.message });
  }
};

const getComentarioById = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id_comentario);
    if (!review) {
      return res.status(404).json({ message: 'Comentario no encontrado' });
    }
    if (req.headers.accept === 'application/xml') {
      res.set('Content-Type', 'application/xml');
      res.send(convertToXML({ review }));
    } else {
      res.json(review);
    }
  } catch (error) {
    console.error('Error retrieving review:', error);
    res.status(500).json({ message: error.message });
  }
};

const updateComentarioById = async (req, res, next) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id_comentario, req.body, { new: true });
    if (!review) {
      return res.status(404).json({ message: 'Comentario no encontrado' });
    }
    if (req.headers.accept === 'application/xml') {
      res.set('Content-Type', 'application/xml');
      res.send(convertToXML({ comentario }));
    } else {
      res.json(comentario);
    }
  } catch (error) {
    console.error('Error updating review:', error);
    res.status(500).json({ message: error.message });
  }
};

const deleteComentarioById = async (req, res, next) => {
  try {
    const comentario = await Review.findOneAndDelete({review_id: req.params.id_comentario});

    if (!comentario) {
      return res.status(404).json({ message: 'Comentario no encontrado' });
    }
    res.status(204).send({ message: 'Comentario eliminado con éxito'});
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getComentariosByRestauranteId,
  createComentario,
  getComentarioById,
  updateComentarioById,
  deleteComentarioById
};
