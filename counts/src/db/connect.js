const mongoose = require('mongoose')



const connectDb = async (fn)=>{
    mongoose.connect("mongodb://localhost:27017/apollo",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify: false,
    })
    .then(()=>fn())
    .catch(e =>console.log(`Error : ${e}`))

}

module.exports = connectDb