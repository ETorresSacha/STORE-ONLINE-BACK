const deleteTheClothes = require("../controllers/clothes/controllersDeleteClothes");
const ClothesId = require("../controllers/clothes/controllersGetClothesId");
const postTheClothes = require("../controllers/clothes/controllersPostClothes");
const putTheClothes = require("../controllers/clothes/controllersPutClothes");
const getAllClothes = require("../controllers/clothes/controllersgGetAllClothes");

//! GET CLOTHES
const getClothes = async (req, res) => {
  const {title} = req.query

    try {

      // ********************     TITLE     ********************
      if(title){
        const result = await getAllClothes(title);
        return result.length ? res.status(200).json(result):res.status(200).json({message:"No se encontró ningún resultado con esa caracteristica"})

      }

       // ********************     ALL     ********************
      else{
        const result = await getAllClothes();
        return result.length ? res.status(200).json(result) : res.status(200).json({message:"No se encontró resultado"})

      }
      
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };

   //! GET CLOTHES FOR ID
  const getClothesId = async (req, res) => {
    const {id} = req.params
  
      try {
        // ********************     ID     ********************
        if(id){
          const result = await ClothesId(id);
          return res.status(200).json(result);
        }
        
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    };

  //! POST CLOTHES
const postClothes = async (req, res) => {
    try {
      const result = await postTheClothes(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  //! PUT CLOTHES
const putClothes = async (req, res) => {
    const { id } = req.params
    try {
      const result = await putTheClothes(id,req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  //! DELETE CLOTHES
const deleteClothes = async (req, res) => {
    const { id } = req.params
    try {
      const result = await deleteTheClothes(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };



  module.exports = {
    getClothes,
    getClothesId,
    postClothes,
    putClothes,
    deleteClothes
}