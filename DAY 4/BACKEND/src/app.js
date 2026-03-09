import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import usermodel from './model/userdata.js'
const app  = express()
app.use(express.json())
app.use(cors())

app.get("/notes",async (req,res)=>{
 let data =  await usermodel.find()
  res.status(201).json({
    message:"data fetched",
    data
  })
})

app.post("/notes", async (req,res)=>{
   let{title,decription}= req.body

    await usermodel.create(
    {
        title,
        decription,
    }
)   

res.status(201).json({
    message:"Userdata have created"
})

})

app.delete("/notes/:id",async (req,res)=>{
     const id =  req.params.id
     await usermodel.findByIdAndDelete(id)

     res.status(200).json({
        message:"data has been deleted"
     })
})

app.patch("/notes/:id", async(req,res)=>{
   let id  = req.params.id
   let{title,decription}= req.body
   await usermodel.findByIdAndUpdate(id,{decription,title})
   
   res.status(200).json({
    message:"data has been updated"
   })
})

export default app