const express = require("express")

let app = express()

app.use(express.json())

app.post("/",(req,res)=>{
   console.log(req.body)
})

app.get("/",(req,res)=>{
   res.send("Hii This is Backend 1st class")
})

app.listen(3000) 