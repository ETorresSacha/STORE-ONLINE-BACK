const mongoose = require('mongoose');
const clothes = require('../models/clothes')

const ClothesId = async (id) => {
  
  try {
    // ********************     ID     ********************
    const result = await clothes.findById(id)
    return result

  } catch (error) {
    throw new Error("No se encontró ningún resultado");
  }
};

module.exports = ClothesId;
