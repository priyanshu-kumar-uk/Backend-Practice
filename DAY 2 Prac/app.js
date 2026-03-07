import express from 'express'
const app = express()

app.use(express.json())

let data = []
app.get("/",(req,res)=>{
  res.send("Hii This backned 2nd class Revision")
})

app.post("/notes",(req,res)=>{
    data.push(req.body)
    res.status(201).json({
        message:"Notes has been created"
    })
})

app.get("/notes",(req,res)=>{
    res.status(200).json({
        message:"Data have a fetched",
        data
    })  
})
app.patch("/notes/:index",(req,res)=>{
  let id =  req.params.index
  let {title} = req.body 
  data[id].title = title

  res.status(200).json({
    message:"data has been updated"
  })
})

app.delete("/notes/:idx",(req,res)=>{
    let id = req.params.idx
    delete data[id]

    res.status(201).json({
        message:"Data has been deleted"
    })
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

