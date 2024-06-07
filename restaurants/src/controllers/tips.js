const { Tip } = require('../models');

const getTipsByBusinessId = async (req, res, next) => {
  try {
    const { business_id } = req.params;
    const limit = parseInt(req.query.limit) || 10;

    const tips = await Tip.find({ business_id })
      .limit(limit);

    res.json(tips);
  } catch (error) {
    console.error('Error retrieving tips:', error);
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo tip
const createTip = async (req, res, next) => {
  try {
    const { user_id, business_id, text, date } = req.body;


    const tip = new Tip({
      user_id,
      business_id,
      text,
      date,
    });

    await tip.save();
    res.status(201).json(tip);
  } catch (error) {
    console.error('Error creating tip:', error);
    res.status(500).json({ message: error.message });
  }
};

// Obtener un tip por id
const getTipById = async (req, res, next) => {
  try {
    const tip = await Tip.findOne({ tip_id: req.params.id });
    if (!tip) {
      return res.status(404).json({ message: 'Tip no encontrado' });
    }
    res.json(tip);
  } catch (error) {
    console.error('Error retrieving tip:', error);
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un tip por id
const updateTipById = async (req, res, next) => {
  try {
    const tip = await Tip.findOneAndUpdate({ tip_id: req.params.id }, req.body, { new: true });
    if (!tip) {
      return res.status(404).json({ message: 'Tip no encontrado' });
    }
    res.json(tip);
  } catch (error) {
    console.error('Error updating tip:', error);
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un tip por id
const deleteTipById = async (req, res, next) => {
  try {
    const tip = await Tip.findOneAndDelete({ tip_id: req.params.id });
    if (!tip) {
      return res.status(404).json({ message: 'Tip no encontrado' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting tip:', error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTipsByBusinessId,
  createTip,
  getTipById,
  updateTipById,
  deleteTipById
};
