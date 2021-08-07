const mongoose = require('mongoose')
require("dotenv").config()


const connectDb = async (fn)=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify: false,
    })
    .then(()=>fn())
    .catch(e =>console.log(`Error : ${e}`))

}

module.exports = connectDb