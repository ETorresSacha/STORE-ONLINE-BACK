const mongoose = require('mongoose');
const clothes = require('../models/clothes')

const postTheClothes = async ({title,description,image,price,stock,color,gender,category}) => {

  try {

    if(!title || !description || !image || !price || !stock || !color || !gender || !category) throw new Error("Faltan completar los datos correctamente")
    else{
      const resultNewClothes = new clothes({title,description,image,price,stock,color,gender,category})
      await resultNewClothes.save()
      return resultNewClothes
  }

  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = postTheClothes;
