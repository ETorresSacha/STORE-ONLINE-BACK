const mongoose = require('mongoose');
const clothes = require('../models/clothes')

const putTheClothes = async (id) => {
  try {
    
    return "PUT RESULT" + id
  } catch (error) {
    throw new Error('Database error');
  }
};

module.exports = putTheClothes;
