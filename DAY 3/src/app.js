import express from "express";
const app = express();
app.use(express.json());
import usermodel from "./models/note.model.js";
app.get("/", (req, res) => {
  res.send("Hii this mongodb class");
});

app.post("/notes", async (req, res) => {
  let { username, password } = req.body;
  let notes = await usermodel.create({
    username,
    password,
  });
  res.status(201).json({
    message: "data is created",
  });
});
// find all elements.
app.get("/notes", async (req, res) => {
  let datas = await usermodel.find();
  console.log(datas);
  res.status(200).json({
    message: "Users data  have  fetched",
    datas,
  });
});
// findone find only first match data than return

app.get("/notes/:id",async (req,res)=>{
   let id =  req.params.id
    let datas = await usermodel.findById(id)
    res.status(200).json({
        message:"data find",
        datas
    })
})
app.delete("/notes/:id", async (req,res)=>{
       let id = req.params.id 
      await usermodel.findByIdAndDelete(id)
       res.status(200).json(
        {
            message:"this data is deleted"
        }
    )
})

app.patch("/notes/:id",async (req,res)=>{
    let id = req.params.id
     let{username,password} = req.body

     await usermodel.findByIdAndUpdate(id,{username,password})

     res.status(201).json({
        message : "data have been updated "
     })
})
export default app;

// create a server
// server congigs
