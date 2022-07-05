const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/searchbar")


const userSchema = mongoose.Schema({
  name:String
}) 
 
 module.exports = mongoose.model("user",userSchema)