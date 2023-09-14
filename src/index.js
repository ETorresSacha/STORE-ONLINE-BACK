const app  = require('./server')
require('./database')

const mongoose = require('mongoose')
mongoose
.connect('mongodb+srv://erikts10:Lt2l9A1XJiPeTKwM@cluster0.x6smru4.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log("connect mongo"))
.catch((error)=>console.error(error))

app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
})  



