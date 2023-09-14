const express = require('express')
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require('path')
const routes = require("./routes/index")
const morgan = require('morgan')
require("dotenv").config()

// Initializations
const app = express()
app.use(morgan('dev'));

// Settings
app.set('port',process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views')) // esta configuracion se hace para encontrar la ruta de la carpeta views

//!  CONFIGURACIÓN DEL SERVIDOR NODE.JS
//TODO--> "El siguiente código es para crear una API web con ciertos ajustes importantes, como el análisis de cuerpos de solicitud,
//TODO     el manejo de cookies, el registro de solicitudes y la configuración de encabezados CORS para permitir el acceso desde otros."

app.name = "API";
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});


// Middlewares
app.use(express.urlencoded({extended:false})) // Sirve para que la aplicación Express analice automáticamente los datos enviados en un formulario HTML cuando el cliente realiza una solicitud POST.

//! MIDDLEWARE DE MANEJO DE ERRORES
//TODO--> "este  se utiliza para capturar errores en una aplicación Node.js y responder con una respuesta de error adecuada, 
//TODO     incluyendo el código de estado HTTP y el mensaje de error."
//TODO--> OJO: ": La falta de manejo de errores adecuado puede exponer detalles sensibles o internos de la aplicación al cliente, lo que podría ser un riesgo de seguridad."

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });


// Global Variables

// Routes
app.use('/',routes)

// Static files



module.exports = app