import app from './src/app.js'
import dbconncet from './src/config/database.js'

dbconncet()
app.listen(3000,()=>{
    console.log("Serevr is running port 3000")
})