const { Router } = require("express");
const { getClothes, postClothes, putClothes, deleteClothes } = require("../handlers/handlersGetClothes");

const clothesRoute = Router();

clothesRoute.get("/",getClothes)
clothesRoute.get("/:id",getClothes)
clothesRoute.post("/",postClothes)
clothesRoute.put("/:id",putClothes)
clothesRoute.delete("/:id",deleteClothes)

module.exports = clothesRoute;