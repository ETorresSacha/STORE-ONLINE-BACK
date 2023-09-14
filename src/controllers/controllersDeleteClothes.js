const mongoose = require('mongoose');
const clothes = require('../models/clothes')

const deleteTheClothes = async (id) => {
  try {
    
    return "DELETE RESULT"+id
  } catch (error) {
    throw new Error('Database error');
  }
};

module.exports = deleteTheClothes;
