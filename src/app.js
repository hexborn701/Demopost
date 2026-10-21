const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.servies");
const postModel = require("./models/post.model");

const app = express();

app.use(express.json());

const upload = multer({
  storage: multer.memoryStorage(),
});

app.post("/create-post", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "Image file is required",
      });
    }

    const result = await uploadFile(req.file.buffer);

    const post = await postModel.create({
      image: result.url,
      caption: req.body.caption,
    });

    return res.status(201).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    console.error("Error:", error);

    return res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/posts",async(req,res)=>{
  const posts = await postModel.find()

  return res.status(200).json({
    message:"post fetched successfully "
  })
})

module.exports = app;
