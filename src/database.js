const mongoose = require('mongoose')
require("dotenv").config()

//Conectando a la base de datosvde mongo Atlas
mongoose
.connect(process.env.MONGODB_URI)
.then(()=>console.log("connect to mongoDB Atlas"))
.catch((error)=>console.error(error))
