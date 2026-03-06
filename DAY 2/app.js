import express from "express";

const app = express();

app.use(express.json());

let data = [];

app.get("/", (req, res) => {
  res.send("this backend 2nd class");
});

app.post("/notes", (req, res) => {
  data.push(req.body);
  console.log(data);

  res.status(201).json({
    message: "notes is created succesfully",
  });
});

app.get("/notes",(req,res)=>{
    res.status(200).json({
        message:'notes is fetched',
        data
    }) 
})

app.delete("/notes/:id",(req,res)=>{
    let index = req.params.id
   delete data[index]

   res.status(200).json({
    message:`Data have been deleted ${index}`
   })
})

app.patch('/notes/:id',(req,res)=>{    
   let index = req.params.id
   let{title} = req.body

   data[index].title = title

   res.status(201).json({
    message:"Data Have been updated",     
   })
})

app.listen(3000,()=>{
    console.log("Server runing port 3000")
});
