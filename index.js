const express = require("express");
const mongoose = require("mongoose");
const cors =require("cors");
const port = 8080;
const app = express();

const uri =
  "mongodb+srv://monarch4553:monarch4553@cluster0.wzbghiq.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => console.log("connected to MongoDB "))
  .catch((err) => console.log(err));

const Postrouter = require("./routes/posts");
app.use(express.json());
app.use(cors())
app.use("/", Postrouter);

app.listen(port, () => {
  console.log("server running on port " + port);
});
