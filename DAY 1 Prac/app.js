const express = require("express")

const app = express()

let store = []

app.use(express.json())
 app.get("/",(req,res)=>{
    res.send("Hii Backend ")
 })

 app.post("/data",(req,res)=>{
     
     store.push(req.body)
   console.log(store)
     res.status(200).json({
        message:"data resived by client succesfully"
     })
 })
app.listen(3000)