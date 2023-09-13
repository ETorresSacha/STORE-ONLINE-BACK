const express = require('express')
const path = require('path')
const morgan = require('morgan')

// Initializations
const app = express()
app.use(morgan('dev'));

// Settings
app.set('port',process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views')) // esta configuracion se hace para encontrar la ruta de la carpeta views

// Middlewares
app.use(express.urlencoded({extended:false}))


// Global Variables

// Routes
app.get('/',(req,res)=>{
    res.send('hola')
})

// Static files
module.exports = app