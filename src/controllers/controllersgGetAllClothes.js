const mongoose = require('mongoose');
const clothes = require('../models/clothes')

const getAllClothes = async (id,title) => {
  

  try {
    // ********************     ID     ********************
    if(id){
      const result = await clothes.findById(id)
      return result

    }
    // ********************     TITLE     ********************

    else if(title){
      const result = await clothes.find({
        title: { $regex: title, $options: "i" },
      });
      return result
    }

    // ********************     ALL     ********************
    else{

      const result = await clothes.find()
      return result

    }
t
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = getAllClothes;
