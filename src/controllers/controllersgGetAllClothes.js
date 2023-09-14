const mongoose = require('mongoose');
const clothes = require('../models/clothes')

const getAllClothes = async () => {
  try {
    
    return "GET RESULT"
  } catch (error) {
    throw new Error('Database error');
  }
};

module.exports = getAllClothes;
