const mongoose = require('mongoose')

async function connectDB(){
        await mongoose.connect("mongodb_string/halley")
        console.log("Connected to MongoDB")
}
module.exports= connectDB