const mongoose = require('mongoose');
const clothes = require('../models/clothes')

const postTheClothes = async () => {
  try {
    
    return "POST RESULT"
  } catch (error) {
    throw new Error('Database error');
  }
};

module.exports = postTheClothes;
