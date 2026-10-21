const mongoose = require("mongoose");
const { StrictMode } = require("react");

const postSchema= new mongoose.Schema({
    image:String,
    caption:String
})

const postModel= mongoose.model("post",postSchema)