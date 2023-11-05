const PostSchema = require("../models/Postmodel");

const getdata = async (req, res) => {
  try {
    const data = await PostSchema.find({});
    if (data.length > 0) {
      return res.json({ data });
    } else {
      return res.json({ msg: "No Posts found" });
    }
  } catch (error) {
    res.send(error);
  }
};

const postdata = async(req, res) => {
  try {
    const { title, desc,Arr } = req.body;
    console.log(title,desc,Arr);
    if (!title || !desc || Arr.length === 0) {
      return res.send({ msg: "kindly fill all fields" });
    }

    const data = new PostSchema({ title: title, desc: desc, Arr: Arr });
    await data.save();
    console.log("done");
    return res.json(data)
  } catch (error) {
    res.send(error);
  }
};
const delpost = async(req, res) => {
  try {
    
    const data =await PostSchema.findByIdAndDelete(req.params.id)
    res.send(data)
    console.log({data}, data);
  } catch (error) {
    res.send(error);
  }
};

const updatepost = async(req, res) => {
  try {
    
    const data =await PostSchema.findByIdAndUpdate(req.params.id,req.body,{
      new:true
    })
    res.send(data)
    console.log({data}, data);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { getdata, postdata,delpost,updatepost };
