import express from 'express'
const app = express()
app.use(express.json())
import usermodel from './models/note.model.js'

app.post("/notes", async (req,res)=>{
   let{username,title} = req.body

  await usermodel.create(
    {
      username,
      title
    }
  )
})

export default app