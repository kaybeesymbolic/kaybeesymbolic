const mongoose = require("mongoose")

const area = new mongoose.Schema({
    name:{type:String,required:true,trim:true,unique:true},
    countryId:{type:String, trim:true},
})

const City = mongoose.model("City",area)
module.exports  = {City}