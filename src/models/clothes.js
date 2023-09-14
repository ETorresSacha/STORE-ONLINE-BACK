const mongoose = require("mongoose")
const {Schema} = mongoose

const clothesSchema = new Schema({
    title:{
        type: String,
        requered: true
    },
    description:{
        type: String,
        requered: true
    },
    image:{
        type: String,
        requered: true
    },
    price:{
        type: Number,
        requered: true
    },
    stock:{
        type: Number,
        requered: true
    },
    color:{
        type: String,
        requered: true
    },
    gender:{
        type: String,
        requered: true
    },
    category:{
        type: String,
        requered: true
    }
})

const Clothes = mongoose.model("Clothes",clothesSchema)
module.exports = Clothes