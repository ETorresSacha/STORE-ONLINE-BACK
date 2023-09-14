const mongoose = require('mongoose');
const clothes = require('../models/clothes')

const putTheClothes = async (id,body) => {

  try {
    const result = await clothes.findOneAndUpdate( { _id: id },body,{ new: true });
    await result.save();

  return result
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = putTheClothes;
