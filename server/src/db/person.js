const mongoose = require('mongoose')

const person = new mongoose.Schema({
    areaId:{type:String,required:true,trim:true},
    countryId:{type:String,trim:true},
    firstName:{type:String,required:true,trim:true},
    middleName:{type:String,required:true,trim:true},
    lastName:{type:String,required:true,trim:true},
    birthDate:{type:String,trim:true},
    gender:{type:String,default:"MALE"},
    maritalStatus:{type:String,default:"SINGLE"}
})

const Person = mongoose.model("Person",person)
module.exports ={Person}