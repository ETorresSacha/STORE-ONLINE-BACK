const mongoose = require('mongoose');
const clothes = require('../models/clothes')

const deleteTheClothes = async (id) => {
  try {
    const result = await clothes.findByIdAndDelete(id);
    return result
  } catch (error) {
    throw new Error("No se encontró resultado");
  }
};

module.exports = deleteTheClothes;
