const { User } = require('../models');

// Obtener el nombre del usuario por user_id
const getUserNameById = async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const user = await User.findOne({ user_id }, 'name'); // Busca el usuario y solo selecciona el campo 'name'

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json({ name: user.name });
  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUserNameById
};
