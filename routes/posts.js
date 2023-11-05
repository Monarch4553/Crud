const express = require("express");
const { getdata, postdata, delpost,updatepost } = require("../controllers/PostControllers");
const Postsrouter = express.Router();

Postsrouter.get("/", getdata);
Postsrouter.post("/", postdata);
Postsrouter.delete("/:id", delpost);
Postsrouter.put("/:id", updatepost);

module.exports = Postsrouter