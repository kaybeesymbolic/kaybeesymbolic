const mongoose = require('mongoose')

const region = new mongoose.Schema({
    name:{type:String,required:true,trim:true,unique:true},
    isCountry:{type:Boolean,default:false}
})

const Country = mongoose.model("Country",region)
module.exports = {Country}