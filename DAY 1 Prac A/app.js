const express = require("express")

const app = express()

app.use(express.json())

let data = []
 
app.get("/",(req,res)=>{
   res.send("helo this backend ")
})

app.post("/notes",(req,res)=>{
    data.push(req.body)
    console.log(data)
    res.status(200)
})


app.listen(3000)