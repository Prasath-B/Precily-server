const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name:String,
    phone:Number,
    email:String,
    title:String
})

const Data = mongoose.model("Data",dataSchema)

module.exports = Data