import express from 'express'
import usermodel from './model/userdata.js'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())

app.post("/user",async (req,res)=>{
    let{username,email}= req.body
  await usermodel.create({
    username,
    email,
  })

  res.status(201).json({
    message:"data is created"
  })
})

app.get("/user", async (req,res)=>{
  let data = await usermodel.find()

  res.status(200).json({
    message: "data is fected",
    data
  })
})

app.delete("/user/:id", async (req,res)=>{
 let id =  req.params.id
 await  usermodel.findByIdAndDelete(id)

 res.status(200).json({
    message:"data has been deleted"
 })
})

app.patch("/user/:id",async (req,res)=>{
    let{username,email} = req.body
    let id = req.params.id
  await usermodel.findByIdAndUpdate(id,{username,email})

  res.status(200).json({
    message:"data has been updated"
  })
})

export default app