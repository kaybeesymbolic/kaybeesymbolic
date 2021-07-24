const mongoose = require('mongoose')




const connectDb = async (fn)=>{
    mongoose.connect(process.env.Db,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify: false,
    })
    .then(()=>fn())
    .catch(e =>console.log(`Error : ${e}`))

}

module.exports = connectDb