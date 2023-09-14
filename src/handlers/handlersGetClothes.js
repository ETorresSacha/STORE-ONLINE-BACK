const deleteTheClothes = require("../controllers/controllersDeleteClothes");
const postTheClothes = require("../controllers/controllersPostClothes");
const putTheClothes = require("../controllers/controllersPutClothes");
const getAllClothes = require("../controllers/controllersgGetAllClothes");

// GET CLOTHES
const getClothes = async (req, res) => {
  const {title} = req.query
  const {id} = req.params

    try {
      // ********************     ID     ********************
      if(id){
        const result = await getAllClothes(id);
        return res.status(200).json(result);

      }

      // ********************     TITLE     ********************
      else if(title){
        const result = await getAllClothes(title);
        return res.status(200).json(result);

      }

       // ********************     ALL     ********************
      else{
        const result = await getAllClothes();
        return res.status(200).json(result);

      }
      
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };

  // POST CLOTHES
const postClothes = async (req, res) => {
    try {
      const result = await postTheClothes(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // PUT CLOTHES
const putClothes = async (req, res) => {
    const { id } = req.params
    try {
      const result = await putTheClothes(id,req.body);
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