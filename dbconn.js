const mongoose = require('mongoose')
require('dotenv').config()
const connectDb = () =>{
    mongoose.connect('mongodb://localhost/money_db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(()=>{
        console.log("Database connected")
    }).catch((err)=>{
        console.log(err)
    })
}
module.exports = connectDb