const deleteTheClothes = require("../controllers/controllersDeleteClothes");
const postTheClothes = require("../controllers/controllersPostClothes");
const putTheClothes = require("../controllers/controllersPutClothes");
const getAllClothes = require("../controllers/controllersgGetAllClothes");

// GET CLOTHES
const getClothes = async (req, res) => {
    try {
      const result = await getAllClothes();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // POST CLOTHES
const postClothes = async (req, res) => {
    try {
      const result = await postTheClothes();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // PUT CLOTHES
const putClothes = async (req, res) => {
    const { id } = req.params
    try {
      const result = await putTheClothes(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // DELETE CLOTHES
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
    postClothes,
    putClothes,
    deleteClothes
}