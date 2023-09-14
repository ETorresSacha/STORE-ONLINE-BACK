const { Router } = require("express");
const clothesRoute = require("./clothesRoutes");
const router = Router();

router.use("/clothes",clothesRoute)


module.exports = router;