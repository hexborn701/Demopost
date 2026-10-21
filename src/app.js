 const express = require("express");
const multer =require('multer')
const uploadFile=require("./services/storage.servies")

 const app=express();
 app.use(express.json())

const upload =multer({ storage: multer.memoryStorage ()})

 app.post('/create-post', upload.single('image'),async(req,res)=>{
   const result =await uploadFile(req.file.buffer)
  console.log(result);


  })

 module.exports=app