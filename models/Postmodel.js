const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  Arr:[
    {
      name:String,
      age:Number
    }
  ]
});

module.exports = mongoose.model("Post", PostSchema);
